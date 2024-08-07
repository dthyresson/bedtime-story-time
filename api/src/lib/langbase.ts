// import { Pipe } from 'langbase'
import { logger } from 'src/lib/logger'

export const bedtimeStoryWriter = async ({
  adjective,
  animal,
  color,
  activity,
}: {
  adjective: string
  animal: string
  color: string
  activity: string
}) => {
  if (!process.env.BEDTIME_STORY_WRITER_PIPE_API_KEY) {
    throw new Error('BEDTIME_STORY_WRITER_PIPE_API_KEY is not set')
  }

  const url = 'https://api.langbase.com/beta/generate'
  const auth = `Bearer ${process.env.BEDTIME_STORY_WRITER_PIPE_API_KEY}`

  const data = {
    stream: false,
    variables: [
      {
        name: 'adjective',
        value: adjective,
      },
      {
        name: 'animal',
        value: animal,
      },
      {
        name: 'color',
        value: color,
      },
      {
        name: 'activity',
        value: activity,
      },
    ],
  }

  logger.debug(data, '>> bedtimeStoryWriter data')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: auth,
  }
  const body = JSON.stringify(data)

  logger.debug({ headers, body }, '>> bedtimeStoryWriter request data')

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  })

  if (!response.ok) {
    console.error({ response }, 'Bad response from bedtimeStoryWriter')
    throw new Error('Bad response from bedtimeStoryWriter')
  }

  if (response.ok) {
    const { completion } = await response.json()
    logger.debug(completion, '>> bedtimeStoryWriter result')
    try {
      return JSON.parse(completion)
    } catch (error) {
      logger.error(error, '>> bedtimeStoryWriter error')
    }
  }

  throw new Error('Failed to generate bedtime story')
}

export const bedtimeStoryPicture = async ({
  adjective,
  animal,
  color,
  summary,
}: {
  adjective: string
  animal: string
  color: string
  summary: string
}) => {
  if (!process.env.BEDTIME_STORY_PICTURE_PIPE_API_KEY) {
    throw new Error('BEDTIME_STORY_PICTURE_PIPE_API_KEY is not set')
  }

  const url = 'https://api.langbase.com/beta/generate'
  const auth = `Bearer ${process.env.BEDTIME_STORY_PICTURE_PIPE_API_KEY}`
  const data = {
    stream: false,
    variables: [
      { name: 'adjective', value: adjective },
      { name: 'animal', value: animal },
      { name: 'color', value: color },
      { name: 'summary', value: summary },
    ],
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: auth,
  }
  const body = JSON.stringify(data)

  logger.debug({ headers, body }, '>> bedtimeStoryPicture request data')

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  })

  if (!response.ok) {
    console.error('Failed to generate bedtime picture instructions')
    return
  }

  if (response.ok) {
    const { completion } = await response.json()
    logger.debug(completion, '>> bedtimeStoryPicture result')
    try {
      return JSON.parse(completion)
    } catch (error) {
      logger.error(error, '>> bedtimeStoryPicture error')
    }
  }

  throw new Error('Failed to generate bedtime picture instructions')
}
