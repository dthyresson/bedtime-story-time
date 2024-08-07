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
    colors: [Color!]! @skipAuth
    color(id: String!): Color @skipAuth
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
    createColor(input: CreateColorInput!): Color! @blocked
    updateColor(id: String!, input: UpdateColorInput!): Color! @blocked
    deleteColor(id: String!): Color! @blocked
  }
`
