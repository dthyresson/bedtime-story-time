import type { APIGatewayEvent } from 'aws-lambda'
import fetch from 'node-fetch'

import { logger } from 'src/lib/logger'
import { story } from 'src/services/stories'

export const handler = async (event: APIGatewayEvent) => {
  logger.info(`${event.httpMethod} ${event.path}: download function`)

  const storyId = event.queryStringParameters?.storyId
  if (!storyId) {
    return {
      statusCode: 400,
      body: 'storyId is required',
    }
  }

  const { title, id, pictureUrl } = await story({ id: storyId })

  logger.info({ title, id, pictureUrl }, 'Downloading story')

  if (!pictureUrl) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Story or picture not found' }),
    }
  }

  try {
    const response = await fetch(pictureUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const contentType =
      response.headers.get('content-type') || 'application/octet-stream'

    // Create a safe filename
    const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
    const timestamp = Date.now()
    const safeFilename = `${safeTitle}_${id}_${timestamp}.jpg`

    // Read the entire response body as a buffer
    const buffer = await streamToBuffer(response.body)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    }
  } catch (error) {
    logger.error('Error fetching image:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch image' }),
    }
  }
}

// Helper function to convert a readable stream to a buffer
async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = []
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    stream.on('error', (err) => reject(err))
    stream.on('end', () => resolve(Buffer.concat(chunks)))
  })
}
