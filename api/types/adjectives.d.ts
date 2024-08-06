import type { Story as PStory, Adjective as PAdjective } from '@prisma/client'
import type { GraphQLResolveInfo } from 'graphql'

import type { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types'

import type {
  Adjective as RTAdjective,
  Story as RTStory,
} from './shared-return-types'
import type {
  CreateAdjectiveInput,
  UpdateAdjectiveInput,
  Query,
  Mutation,
} from './shared-schema-types'

/** SDL: adjectives: [Adjective!]! */
export interface AdjectivesResolver {
  (
    args?: object,
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTAdjective[] | Promise<RTAdjective[]> | (() => Promise<RTAdjective[]>)
}

/** SDL: adjective(id: String!): Adjective */
export interface AdjectiveResolver {
  (
    args: { id: string },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ):
    | RTAdjective
    | null
    | Promise<RTAdjective | null>
    | (() => Promise<RTAdjective | null>)
}

/** SDL: createAdjective(input: CreateAdjectiveInput!): Adjective! */
export interface CreateAdjectiveResolver {
  (
    args: { input: CreateAdjectiveInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTAdjective | Promise<RTAdjective> | (() => Promise<RTAdjective>)
}

/** SDL: updateAdjective(id: String!, input: UpdateAdjectiveInput!): Adjective! */
export interface UpdateAdjectiveResolver {
  (
    args: { id: string; input: UpdateAdjectiveInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTAdjective | Promise<RTAdjective> | (() => Promise<RTAdjective>)
}

/** SDL: deleteAdjective(id: String!): Adjective! */
export interface DeleteAdjectiveResolver {
  (
    args: { id: string },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTAdjective | Promise<RTAdjective> | (() => Promise<RTAdjective>)
}

export interface AdjectiveTypeResolvers {
  /** SDL: story: [Story]! */
  story: (
    args: undefined,
    obj: {
      root: AdjectiveAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) =>
    | Array<RTStory>
    | Promise<Array<RTStory>>
    | (() => Promise<Array<RTStory>>)
}

type AdjectiveAsParent = PAdjective & {
  story: () =>
    | Array<PStory>
    | Promise<Array<PStory>>
    | (() => Promise<Array<PStory>>)
}
