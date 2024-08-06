export const schema = gql`
  type Color {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    code: String!
    description: String!
    story: [Story]!
  }

  type Query {
    colors: [Color!]! @requireAuth
    color(id: String!): Color @requireAuth
  }

  input CreateColorInput {
    name: String!
    code: String!
    description: String!
  }

  input UpdateColorInput {
    name: String
    code: String
    description: String
  }

  type Mutation {
    createColor(input: CreateColorInput!): Color! @requireAuth
    updateColor(id: String!, input: UpdateColorInput!): Color! @requireAuth
    deleteColor(id: String!): Color! @requireAuth
  }
`
