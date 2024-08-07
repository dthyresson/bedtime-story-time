import type {
  StoriesResolver,
  StoryTypeResolvers,
  StoryResolver,
  StoryOptionsResolver,
  CreateStoryResolver,
  UpdateStoryResolver,
  DeleteStoryResolver,
} from 'types/stories'

import { db } from 'src/lib/db'
import { generatePictureUrl } from 'src/lib/fal'
import { bedtimeStoryPicture, bedtimeStoryWriter } from 'src/lib/langbase'
import { logger } from 'src/lib/logger'

export const stories: StoriesResolver = async () => {
  return db.story.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const story: StoryResolver = async ({ id }) => {
  return db.story.findUnique({
    where: { id },
  })
}

export const createStory: CreateStoryResolver = async ({ input }) => {
  try {
    const adjective = await db.adjective.findUnique({
      where: { id: input.adjectiveId },
    })
    const animal = await db.animal.findUnique({
      where: { id: input.animalId },
    })
    const color = await db.color.findUnique({
      where: { id: input.colorId },
    })
    const activity = await db.activity.findUnique({
      where: { id: input.activityId },
    })

    const generatedStory = await bedtimeStoryWriter({
      adjective: adjective.name,
      animal: animal.name,
      color: color.name,
      activity: activity.name,
    })

    const buildStory = async ({ story, input }) => {
      logger.debug({ input, story }, '>>> buildStory')

      const { description } = await bedtimeStoryPicture({
        adjective: adjective.name,
        animal: animal.name,
        color: color.name,
        summary: story.summary,
      })

      return {
        ...input,
        title: story.title,
        story: story.story,
        summary: story.summary,
        pictureUrl: await generatePictureUrl({
          description,
          adjective: adjective.name,
          animal: animal.name,
          color: color.name,
        }),
      }
    }

    const data = await buildStory({ story: generatedStory, input })
    logger.debug(data, '>>> createStory data')
    return db.story.create({
      data,
    })
  } catch (error) {
    logger.error(error, '>>> createStory error')
    throw error
  }
}

export const updateStory: UpdateStoryResolver = async ({ id, input }) => {
  return db.story.update({
    data: input,
    where: { id },
  })
}

export const deleteStory: DeleteStoryResolver = async ({ id }) => {
  return db.story.delete({
    where: { id },
  })
}

export const storyOptions: StoryOptionsResolver = async ({ input }) => {
  const adjective =
    input.adjectiveId !== '' && input.adjectiveId !== undefined
      ? await db.adjective.findUnique({
          where: { id: input.adjectiveId },
        })
      : null

  const animal =
    input.animalId !== '' && input.animalId !== undefined
      ? await db.animal.findUnique({
          where: { id: input.animalId },
        })
      : null

  const color =
    input.colorId !== '' && input.colorId !== undefined
      ? await db.color.findUnique({
          where: { id: input.colorId },
        })
      : null

  const activity =
    input.activityId !== '' && input.activityId !== undefined
      ? await db.activity.findUnique({
          where: { id: input.activityId },
        })
      : null

  const options = {
    adjective,
    animal,
    color,
    activity,
  }

  return options
}

export const Story: StoryTypeResolvers = {
  animal: (_obj, { root }) => {
    return db.story.findUnique({ where: { id: root?.id } }).animal()
  },
  color: (_obj, { root }) => {
    return db.story.findUnique({ where: { id: root?.id } }).color()
  },
  adjective: (_obj, { root }) => {
    return db.story.findUnique({ where: { id: root?.id } }).adjective()
  },
  activity: (_obj, { root }) => {
    return db.story.findUnique({ where: { id: root?.id } }).activity()
  },
}
