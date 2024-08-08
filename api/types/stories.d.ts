import type {
  Animal as PAnimal,
  Color as PColor,
  Adjective as PAdjective,
  Activity as PActivity,
  Story as PStory,
} from '@prisma/client'
import type { GraphQLResolveInfo } from 'graphql'

import type { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types'

import type {
  PaginatedStories as RTPaginatedStories,
  Story as RTStory,
  StoryOptions as RTStoryOptions,
  Animal as RTAnimal,
  Color as RTColor,
  Adjective as RTAdjective,
  Activity as RTActivity,
} from './shared-return-types'
import type {
  CreateStoryInput,
  UpdateStoryInput,
  StoryOptionsInput,
  Query,
  Mutation,
} from './shared-schema-types'

/** SDL: stories(limit: Int, page: Int): PaginatedStories! */
export interface StoriesResolver {
  (
    args: { limit?: number; page?: number },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTPaginatedStories>
}

/** SDL: story(id: String!): Story */
export interface StoryResolver {
  (
    args: { id: string },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTStory | null>
}

/** SDL: createStory(input: CreateStoryInput!): Story! */
export interface CreateStoryResolver {
  (
    args: { input: CreateStoryInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTStory>
}

/** SDL: updateStory(id: String!, input: UpdateStoryInput!): Story! */
export interface UpdateStoryResolver {
  (
    args: { id: string; input: UpdateStoryInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTStory>
}

/** SDL: deleteStory(id: String!): Story! */
export interface DeleteStoryResolver {
  (
    args: { id: string },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTStory>
}

/** SDL: storyOptions(input: StoryOptionsInput!): StoryOptions */
export interface StoryOptionsResolver {
  (
    args: { input: StoryOptionsInput },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTStoryOptions | null>
}

export interface StoryTypeResolvers {
  /** SDL: animal: Animal! */
  animal: (
    args: undefined,
    obj: {
      root: StoryAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) => RTAnimal | Promise<RTAnimal> | (() => Promise<RTAnimal>)

  /** SDL: color: Color! */
  color: (
    args: undefined,
    obj: {
      root: StoryAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) => RTColor | Promise<RTColor> | (() => Promise<RTColor>)

  /** SDL: adjective: Adjective! */
  adjective: (
    args: undefined,
    obj: {
      root: StoryAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) => RTAdjective | Promise<RTAdjective> | (() => Promise<RTAdjective>)

  /** SDL: activity: Activity! */
  activity: (
    args: undefined,
    obj: {
      root: StoryAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) => RTActivity | Promise<RTActivity> | (() => Promise<RTActivity>)
}

type StoryAsParent = PStory & {
  animal: () => PAnimal | Promise<PAnimal> | (() => Promise<PAnimal>)
  color: () => PColor | Promise<PColor> | (() => Promise<PColor>)
  adjective: () =>
    | PAdjective
    | Promise<PAdjective>
    | (() => Promise<PAdjective>)
  activity: () => PActivity | Promise<PActivity> | (() => Promise<PActivity>)
}
