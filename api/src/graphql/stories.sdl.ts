export const schema = gql`
  type Story {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    story: String!
    summary: String!
    description: String!
    pictureUrl: String!
    animalId: String!
    colorId: String!
    adjectiveId: String!
    activityId: String!
    animal: Animal!
    color: Color!
    adjective: Adjective!
    activity: Activity!
  }

  input StoryOptionsInput {
    adjectiveId: String
    animalId: String
    colorId: String
    activityId: String
  }

  type StoryOptions {
    adjective: Adjective
    animal: Animal
    color: Color
    activity: Activity
  }

  type Query {
    stories: [Story!]! @requireAuth
    story(id: String!): Story @requireAuth
    storyOptions(input: StoryOptionsInput!): StoryOptions @requireAuth
  }

  input CreateStoryInput {
    title: String
    story: String
    summary: String
    pictureInstruction: String
    pictureUrl: String
    animalId: String!
    colorId: String!
    adjectiveId: String!
    activityId: String!
  }

  input UpdateStoryInput {
    title: String
    story: String
    summary: String
    pictureUrl: String
    pictureInstruction: String
    animalId: String
    colorId: String
    adjectiveId: String
    activityId: String
  }

  type Mutation {
    createStory(input: CreateStoryInput!): Story! @requireAuth
    updateStory(id: String!, input: UpdateStoryInput!): Story! @requireAuth
    deleteStory(id: String!): Story! @requireAuth
  }
`
