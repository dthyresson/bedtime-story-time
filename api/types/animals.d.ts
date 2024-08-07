import type { Story as PStory, Animal as PAnimal } from '@prisma/client'
import type { GraphQLResolveInfo } from 'graphql'

import type { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types'

import type {
  Animal as RTAnimal,
  Story as RTStory,
} from './shared-return-types'
import type {
  CreateAnimalInput,
  UpdateAnimalInput,
  Query,
  Mutation,
} from './shared-schema-types'

/** SDL: animals: [Animal!]! */
export interface AnimalsResolver {
  (
    args?: object,
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTAnimal[]>
}

/** SDL: animal(id: String!): Animal */
export interface AnimalResolver {
  (
    args: { id: string },
    obj?: {
      root: Query
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTAnimal | null>
}

/** SDL: createAnimal(input: CreateAnimalInput!): Animal! */
export interface CreateAnimalResolver {
  (
    args: { input: CreateAnimalInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTAnimal>
}

/** SDL: updateAnimal(id: String!, input: UpdateAnimalInput!): Animal! */
export interface UpdateAnimalResolver {
  (
    args: { id: string; input: UpdateAnimalInput },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTAnimal>
}

/** SDL: deleteAnimal(id: String!): Animal! */
export interface DeleteAnimalResolver {
  (
    args: { id: string },
    obj?: {
      root: Mutation
      context: RedwoodGraphQLContext
      info: GraphQLResolveInfo
    }
  ): Promise<RTAnimal>
}

export interface AnimalTypeResolvers {
  /** SDL: story: [Story]! */
  story: (
    args: undefined,
    obj: {
      root: AnimalAsParent
      context?: RedwoodGraphQLContext
      info?: GraphQLResolveInfo
    }
  ) =>
    | Array<RTStory>
    | Promise<Array<RTStory>>
    | (() => Promise<Array<RTStory>>)
}

type AnimalAsParent = PAnimal & {
  story: () =>
    | Array<PStory>
    | Promise<Array<PStory>>
    | (() => Promise<Array<PStory>>)
}
