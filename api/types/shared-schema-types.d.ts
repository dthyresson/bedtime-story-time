export interface Activity {
  __typename?: 'Activity'
  createdAt: DateTime
  emoji: string
  id: string
  name: string
  story: Array<Story>
  updatedAt: DateTime
}

export interface Adjective {
  __typename?: 'Adjective'
  createdAt: DateTime
  emoji: string
  id: string
  name: string
  story: Array<Story>
  updatedAt: DateTime
}

export interface Animal {
  __typename?: 'Animal'
  createdAt: DateTime
  emoji: string
  id: string
  name: string
  story: Array<Story>
  updatedAt: DateTime
}

export interface Color {
  __typename?: 'Color'
  code: string
  createdAt: DateTime
  description: string
  id: string
  name: string
  story: Array<Story>
  updatedAt: DateTime
}

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
  pictureInstruction?: string | null
  pictureUrl?: string | null
  story?: string | null
  summary?: string | null
  title?: string | null
}

export interface Mutation {
  __typename?: 'Mutation'
  createActivity: Activity
  createAdjective: Adjective
  createAnimal: Animal
  createColor: Color
  createStory: Story
  deleteActivity: Activity
  deleteAdjective: Adjective
  deleteAnimal: Animal
  deleteColor: Color
  deleteStory: Story
  updateActivity: Activity
  updateAdjective: Adjective
  updateAnimal: Animal
  updateColor: Color
  updateStory: Story
}

export interface Query {
  __typename?: 'Query'
  activities: Activity[]
  activity?: Activity | null
  adjective?: Adjective | null
  adjectives: Adjective[]
  animal?: Animal | null
  animals: Animal[]
  color?: Color | null
  colors: Color[]
  redwood?: Redwood | null
  stories: Story[]
  story?: Story | null
  storyOptions?: StoryOptions | null
}

export interface Redwood {
  __typename?: 'Redwood'
  currentUser?: JSON | null
  prismaVersion?: string | null
  version?: string | null
}

export interface Story {
  __typename?: 'Story'
  activity: Activity
  activityId: string
  adjective: Adjective
  adjectiveId: string
  animal: Animal
  animalId: string
  color: Color
  colorId: string
  createdAt: DateTime
  id: string
  pictureInstruction: string
  pictureUrl: string
  story: string
  summary: string
  title: string
  updatedAt: DateTime
}

export interface StoryOptions {
  __typename?: 'StoryOptions'
  activity?: Activity | null
  adjective?: Adjective | null
  animal?: Animal | null
  color?: Color | null
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
  pictureInstruction?: string | null
  pictureUrl?: string | null
  story?: string | null
  summary?: string | null
  title?: string | null
}

type DateTime = any
type JSON = any
