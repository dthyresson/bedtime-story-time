import type {
  StoriesResolver,
  StoryTypeResolvers,
  StoryResolver,
  CreateStoryResolver,
  UpdateStoryResolver,
  DeleteStoryResolver,
} from 'types/stories'

import { db } from 'src/lib/db'

export const stories: StoriesResolver = () => {
  return db.story.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const story: StoryResolver = ({ id }) => {
  return db.story.findUnique({
    where: { id },
  })
}

export const createStory: CreateStoryResolver = ({ input }) => {
  const buildStory = (input) => {
    return {
      ...input,
      title: `The ${input.adjectiveId} ${input.animalId} ${input.colorId} ${input.activityId} story`,
      story: `Once upon a time, there was a ${input.adjectiveId} ${input.animalId} who lived in a ${input.colorId} ${input.activityId}.`,
      summary: `Summary of ${input.adjectiveId} ${input.animalId} ${input.colorId} ${input.activityId}`,
      pictureUrl: `${input.adjectiveId}-${input.animalId}-${input.colorId}-${input.activityId}.png`,
    }
  }
  return db.story.create({
    data: buildStory(input),
  })
}

export const updateStory: UpdateStoryResolver = ({ id, input }) => {
  return db.story.update({
    data: input,
    where: { id },
  })
}

export const deleteStory: DeleteStoryResolver = ({ id }) => {
  return db.story.delete({
    where: { id },
  })
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
