import type { Story as PStory, Color as PColor } from '@prisma/client'
import type { GraphQLResolveInfo } from 'graphql'

import type { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types'

import type { Color as RTColor, Story as RTStory } from './shared-return-types'
import type {
  CreateColorInput,
  UpdateColorInput,
  Query,
  Mutation,
} from './shared-schema-types'

/** SDL: colors: [Color!]! */
export interface ColorsResolver {
  (
    args?: object,
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTColor[] | Promise<RTColor[]> | (() => Promise<RTColor[]>)
}

/** SDL: color(id: String!): Color */
export interface ColorResolver {
  (
    args: { id: string },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTColor | null | Promise<RTColor | null> | (() => Promise<RTColor | null>)
}

/** SDL: createColor(input: CreateColorInput!): Color! */
export interface CreateColorResolver {
  (
    args: { input: CreateColorInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTColor | Promise<RTColor> | (() => Promise<RTColor>)
}

/** SDL: updateColor(id: String!, input: UpdateColorInput!): Color! */
export interface UpdateColorResolver {
  (
    args: { id: string; input: UpdateColorInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTColor | Promise<RTColor> | (() => Promise<RTColor>)
}

/** SDL: deleteColor(id: String!): Color! */
export interface DeleteColorResolver {
  (
    args: { id: string },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): RTColor | Promise<RTColor> | (() => Promise<RTColor>)
}

export interface ColorTypeResolvers {
  /** SDL: story: [Story]! */
  story: (
    args: undefined,
    obj: {
      root: ColorAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) =>
    | Array<RTStory>
    | Promise<Array<RTStory>>
    | (() => Promise<Array<RTStory>>)
}

type ColorAsParent = PColor & {
  story: () =>
    | Array<PStory>
    | Promise<Array<PStory>>
    | (() => Promise<Array<PStory>>)
}
