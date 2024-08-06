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
    adjectives: [Adjective!]! @requireAuth
    adjective(id: String!): Adjective @requireAuth
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
    createAdjective(input: CreateAdjectiveInput!): Adjective! @requireAuth
    updateAdjective(id: String!, input: UpdateAdjectiveInput!): Adjective!
      @requireAuth
    deleteAdjective(id: String!): Adjective! @requireAuth
  }
`
