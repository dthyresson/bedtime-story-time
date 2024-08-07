import type { APIGatewayEvent, Context } from 'aws-lambda'
import fetch from 'node-fetch'
import PDFDocument from 'pdfkit'

import { logger } from 'src/lib/logger'
import { story } from 'src/services/stories'

async function generatePDF(
  title: string,
  summary: string | null,
  content: string,
  pictureUrl: string | null
): Promise<Buffer> {
  // Set custom margins (in points, 72 points = 1 inch)
  const margins = {
    top: 72 / 3,
    bottom: 72 / 3,
    left: 72 / 3,
    right: 72 / 3,
  }

  const doc = new PDFDocument({ margins })
  const chunks: Buffer[] = []

  doc.on('data', (chunk) => chunks.push(chunk))
  doc.on('end', () => {})

  // Add title
  doc.font('Times-Bold').fontSize(24).text(title, { align: 'center' })
  doc.font('Times-Roman').moveDown(0.5)

  // Add image if available
  if (pictureUrl) {
    try {
      const imageResponse = await fetch(pictureUrl)
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.buffer()
        const pageWidth = doc.page.width
        const imageWidth = Math.min(400, pageWidth - 100)
        const x = (pageWidth - imageWidth) / 2
        doc.image(imageBuffer, x, doc.y, { fit: [imageWidth, 300] })
        doc.moveDown(12)
      }
    } catch (error) {
      logger.error('Error fetching image:', error)
    }
  }

  // Add summary if available
  if (summary) {
    doc.font('Times-Bold').fontSize(14).text(summary)
    doc.font('Times-Roman').moveDown(1)
  }

  // Add content
  doc.fontSize(12).text(content)

  doc.end()

  return Buffer.concat(chunks)
}

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: pdf function`)

  const storyId = event.queryStringParameters?.storyId
  if (!storyId) {
    return {
      statusCode: 400,
      body: 'storyId is required',
    }
  }

  try {
    const {
      title,
      summary,
      story: content,
      pictureUrl,
    } = await story({ id: storyId })

    if (!title || !content) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Story not found' }),
      }
    }

    const pdfBuffer = await generatePDF(title, summary, content, pictureUrl)

    // Create a safe filename
    const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
    const timestamp = Date.now()
    const safeFilename = `${safeTitle}_${storyId}_${timestamp}.pdf`

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
      },
      body: pdfBuffer.toString('base64'),
      isBase64Encoded: true,
    }
  } catch (error) {
    logger.error('Error generating PDF:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate PDF' }),
    }
  }
}
