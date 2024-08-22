import { Pipe } from 'langbase'

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

  const pipe = new Pipe({
    apiKey: process.env.BEDTIME_STORY_WRITER_PIPE_API_KEY,
  })

  const options = {
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

  logger.debug(options, '>> bedtimeStoryWriter options')

  try {
    const { completion } = await pipe.generateText(options)

    if (!completion) {
      throw new Error('Bad response from bedtimeStoryWriter')
    }

    logger.debug(completion, '>> bedtimeStoryWriter result')
    return JSON.parse(completion)
  } catch (error) {
    logger.error(error, '>> bedtimeStoryWriter error')
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

  const pipe = new Pipe({
    apiKey: process.env.BEDTIME_STORY_PICTURE_PIPE_API_KEY,
  })

  const options = {
    variables: [
      { name: 'adjective', value: adjective },
      { name: 'animal', value: animal },
      { name: 'color', value: color },
      { name: 'summary', value: summary },
    ],
  }
  try {
    const { completion } = await pipe.generateText(options)

    if (!completion) {
      console.error('Failed to generate bedtime picture instructions')
      return
    }

    logger.debug(completion, '>> bedtimeStoryPicture result')
    return JSON.parse(completion)
  } catch (error) {
    logger.error(error, '>> bedtimeStoryPicture error')
  }

  throw new Error('Failed to generate bedtime picture instructions')
}

export const bedtimeStoryTranslator = async ({
  title,
  summary,
  story,
  description,
  language,
}: {
  title: string
  summary: string
  story: string
  description: string
  language: string
}) => {
  if (!process.env.BEDTIME_STORY_TRANSLATOR_PIPE_API_KEY) {
    throw new Error('BEDTIME_STORY_TRANSLATOR_PIPE_API_KEY is not set')
  }

  const pipe = new Pipe({
    apiKey: process.env.BEDTIME_STORY_TRANSLATOR_PIPE_API_KEY,
  })

  const options = {
    variables: [
      { name: 'title', value: title },
      { name: 'summary', value: summary },
      { name: 'story', value: story },
      { name: 'description', value: description },
      { name: 'language', value: language },
    ],
  }
  try {
    const { completion } = await pipe.generateText(options)

    if (!completion) {
      throw new Error('Failed to translate story')
    }

    logger.debug(completion, '>> bedtimeStoryTranslator completion')

    return JSON.parse(completion)
  } catch (error) {
    logger.error(error, '>> bedtimeStoryTranslator error')
  }

  throw new Error('Failed to translate bedtime story')
}
