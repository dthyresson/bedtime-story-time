import type {
  Activity as PActivity,
  Adjective as PAdjective,
  Animal as PAnimal,
  Color as PColor,
  Story as PStory,
} from '@prisma/client'

// You may very reasonably ask yourself, 'what is this file?' and why do I need it.

// Roughly, this file ensures that when a resolver wants to return a type - that
// type will match a prisma model. This is useful because you can trivially extend
// the type in the SDL and not have to worry about type mis-matches because the thing
// you returned does not include those functions.

// This gets particularly valuable when you want to return a union type, an interface,
// or a model where the prisma model is nested pretty deeply (GraphQL connections, for example.)
export interface CreateActivityInput {
  __typename?: 'CreateActivityInput'
  emoji: string
  name: string
}

export interface CreateAdjectiveInput {
  __typename?: 'CreateAdjectiveInput'
  emoji: string
  name: string
}

export interface CreateAnimalInput {
  __typename?: 'CreateAnimalInput'
  emoji: string
  name: string
}

export interface CreateColorInput {
  __typename?: 'CreateColorInput'
  code: string
  description: string
  name: string
}

export interface CreateStoryInput {
  __typename?: 'CreateStoryInput'
  activityId: string
  adjectiveId: string
  animalId: string
  colorId: string
  pictureUrl?: string | null
  story?: string | null
  summary?: string | null
  title?: string | null
}

export interface Mutation {
  __typename?: 'Mutation'
  createActivity: PActivity
  createAdjective: PAdjective
  createAnimal: PAnimal
  createColor: PColor
  createStory: PStory
  deleteActivity: PActivity
  deleteAdjective: PAdjective
  deleteAnimal: PAnimal
  deleteColor: PColor
  deleteStory: PStory
  updateActivity: PActivity
  updateAdjective: PAdjective
  updateAnimal: PAnimal
  updateColor: PColor
  updateStory: PStory
}

export interface Query {
  __typename?: 'Query'
  activities: PActivity[]
  activity?: PActivity | null
  adjective?: PAdjective | null
  adjectives: PAdjective[]
  animal?: PAnimal | null
  animals: PAnimal[]
  color?: PColor | null
  colors: PColor[]
  redwood?: Redwood | null
  stories: PStory[]
  story?: PStory | null
  storyOptions?: StoryOptions | null
}

export interface Redwood {
  __typename?: 'Redwood'
  currentUser?: JSON | null
  prismaVersion?: string | null
  version?: string | null
}

export interface StoryOptions {
  __typename?: 'StoryOptions'
  activity?: PActivity | null
  adjective?: PAdjective | null
  animal?: PAnimal | null
  color?: PColor | null
}

export interface StoryOptionsInput {
  __typename?: 'StoryOptionsInput'
  activityId?: string | null
  adjectiveId?: string | null
  animalId?: string | null
  colorId?: string | null
}

export interface UpdateActivityInput {
  __typename?: 'UpdateActivityInput'
  emoji?: string | null
  name?: string | null
}

export interface UpdateAdjectiveInput {
  __typename?: 'UpdateAdjectiveInput'
  emoji?: string | null
  name?: string | null
}

export interface UpdateAnimalInput {
  __typename?: 'UpdateAnimalInput'
  emoji?: string | null
  name?: string | null
}

export interface UpdateColorInput {
  __typename?: 'UpdateColorInput'
  code?: string | null
  description?: string | null
  name?: string | null
}

export interface UpdateStoryInput {
  __typename?: 'UpdateStoryInput'
  activityId?: string | null
  adjectiveId?: string | null
  animalId?: string | null
  colorId?: string | null
  pictureUrl?: string | null
  story?: string | null
  summary?: string | null
  title?: string | null
}

type JSON = any
export type Activity = PActivity
export type Adjective = PAdjective
export type Animal = PAnimal
export type Color = PColor
export type Story = PStory
