import type { Story as PStory, Activity as PActivity } from '@prisma/client'
import type { GraphQLResolveInfo } from 'graphql'

import type { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types'

import type {
  Activity as RTActivity,
  Story as RTStory,
} from './shared-return-types'
import type {
  CreateActivityInput,
  UpdateActivityInput,
  Query,
  Mutation,
} from './shared-schema-types'

/** SDL: activities: [Activity!]! */
export interface ActivitiesResolver {
  (
    args?: object,
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTActivity[]>
}

/** SDL: activity(id: String!): Activity */
export interface ActivityResolver {
  (
    args: { id: string },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTActivity | null>
}

/** SDL: createActivity(input: CreateActivityInput!): Activity! */
export interface CreateActivityResolver {
  (
    args: { input: CreateActivityInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTActivity>
}

/** SDL: updateActivity(id: String!, input: UpdateActivityInput!): Activity! */
export interface UpdateActivityResolver {
  (
    args: { id: string; input: UpdateActivityInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTActivity>
}

/** SDL: deleteActivity(id: String!): Activity! */
export interface DeleteActivityResolver {
  (
    args: { id: string },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTActivity>
}

export interface ActivityTypeResolvers {
  /** SDL: story: [Story]! */
  story: (
    args: undefined,
    obj: {
      root: ActivityAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) =>
    | Array<RTStory>
    | Promise<Array<RTStory>>
    | (() => Promise<Array<RTStory>>)
}

type ActivityAsParent = PActivity & {
  story: () =>
    | Array<PStory>
    | Promise<Array<PStory>>
    | (() => Promise<Array<PStory>>)
}
