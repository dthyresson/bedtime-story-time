// import { Pipe } from 'langbase'
import { logger } from 'src/lib/logger'

const BEDTIME_STORY_WRITER_PIPE_API_KEY =
  'pipe_2y6P3WY5bEtRc3RV5ApcNWwCdLkFPEZuss9jQVsSvpK89or5XYsH2tuY5HsXizZ7hVrDJyRbZtTqDYgEKC56Eyt'

const BEDTIME_STORY_PICTURE_PIPE_API_KEY =
  'pipe_4LNkv4aSf9ZCDQgwA6JgS1CgFaSC1cN9v7PUdNbfqguNB8X5YJpwGVdF4UtJu9vgBAbNWcAFqCbiLkwhT5Ev2xNy'

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
  const url = 'https://api.langbase.com/beta/generate'

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

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${BEDTIME_STORY_WRITER_PIPE_API_KEY}`,
    },
    body: JSON.stringify(data),
  })

  logger.debug(response, '>> bedtimeStoryWriter response')

  if (!response.ok) {
    console.error('Failed to generate bedtime story')
    return
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
  const url = 'https://api.langbase.com/beta/generate'

  const data = {
    stream: false,
    variables: [
      { name: 'adjective', value: adjective },
      { name: 'animal', value: animal },
      { name: 'color', value: color },
      { name: 'summary', value: summary },
    ],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${BEDTIME_STORY_PICTURE_PIPE_API_KEY}`,
    },
    body: JSON.stringify(data),
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
