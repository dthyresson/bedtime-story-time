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
    stories: [Story!]! @skipAuth
    story(id: String!): Story @skipAuth
    storyOptions(input: StoryOptionsInput!): StoryOptions @skipAuth
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
    createStory(input: CreateStoryInput!): Story!
      @rateLimited(identifier: "createStory")
    updateStory(id: String!, input: UpdateStoryInput!): Story! @blocked
    deleteStory(id: String!): Story! @blocked
  }
`
