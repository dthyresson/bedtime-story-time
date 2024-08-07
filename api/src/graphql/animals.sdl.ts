export const schema = gql`
  type Animal {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    emoji: String!
    story: [Story]!
  }

  type Query {
    animals: [Animal!]! @skipAuth
    animal(id: String!): Animal @skipAuth
  }

  input CreateAnimalInput {
    name: String!
    emoji: String!
  }

  input UpdateAnimalInput {
    name: String
    emoji: String
  }

  type Mutation {
    createAnimal(input: CreateAnimalInput!): Animal! @blocked
    updateAnimal(id: String!, input: UpdateAnimalInput!): Animal! @blocked
    deleteAnimal(id: String!): Animal! @blocked
  }
`
