export const schema = gql`
  type Adjective {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    emoji: String!
    story: [Story]!
  }

  type Query {
    adjectives: [Adjective!]! @skipAuth
    adjective(id: String!): Adjective @skipAuth
  }

  input CreateAdjectiveInput {
    name: String!
    emoji: String!
  }

  input UpdateAdjectiveInput {
    name: String
    emoji: String
  }

  type Mutation {
    createAdjective(input: CreateAdjectiveInput!): Adjective! @blocked
    updateAdjective(id: String!, input: UpdateAdjectiveInput!): Adjective!
      @blocked
    deleteAdjective(id: String!): Adjective! @blocked
  }
`
