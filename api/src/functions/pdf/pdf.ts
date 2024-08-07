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
  const doc = new PDFDocument()
  const chunks: Buffer[] = []

  doc.on('data', (chunk) => chunks.push(chunk))
  doc.on('end', () => {})

  // Add title
  doc.fontSize(24).text(title, { align: 'center' })
  doc.moveDown(2)

  // Add image if available
  if (pictureUrl) {
    try {
      const imageResponse = await fetch(pictureUrl)
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.buffer()
        doc.image(imageBuffer, { fit: [400, 300], align: 'center' })
        doc.moveDown(2)
      }
    } catch (error) {
      logger.error('Error fetching image:', error)
    }
  }

  // Add summary if available
  if (summary) {
    doc.fontSize(14).text('Summary:', { underline: true })
    doc.moveDown(0.5)
    doc.fontSize(12).text(summary)
    doc.moveDown(2)
  }

  // Add content
  doc.fontSize(14).text('Story:', { underline: true })
  doc.moveDown(0.5)
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

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="story_${storyId}.pdf"`,
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
