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
    animals: [Animal!]! @requireAuth
    animal(id: String!): Animal @requireAuth
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
    createAnimal(input: CreateAnimalInput!): Animal! @requireAuth
    updateAnimal(id: String!, input: UpdateAnimalInput!): Animal! @requireAuth
    deleteAnimal(id: String!): Animal! @requireAuth
  }
`
