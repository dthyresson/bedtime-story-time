import type {
  QueryResolvers,
  MutationResolvers,
  StoryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const stories: QueryResolvers['stories'] = () => {
  return db.story.findMany()
}

export const story: QueryResolvers['story'] = ({ id }) => {
  return db.story.findUnique({
    where: { id },
  })
}

export const createStory: MutationResolvers['createStory'] = ({ input }) => {
  return db.story.create({
    data: input,
  })
}

export const updateStory: MutationResolvers['updateStory'] = ({
  id,
  input,
}) => {
  return db.story.update({
    data: input,
    where: { id },
  })
}

export const deleteStory: MutationResolvers['deleteStory'] = ({ id }) => {
  return db.story.delete({
    where: { id },
  })
}

export const Story: StoryRelationResolvers = {
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
