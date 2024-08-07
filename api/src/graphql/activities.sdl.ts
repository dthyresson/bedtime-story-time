export const schema = gql`
  type Activity {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    emoji: String!
    story: [Story]!
  }

  type Query {
    activities: [Activity!]! @skipAuth
    activity(id: String!): Activity @skipAuth
  }

  input CreateActivityInput {
    name: String!
    emoji: String!
  }

  input UpdateActivityInput {
    name: String
    emoji: String
  }

  type Mutation {
    createActivity(input: CreateActivityInput!): Activity! @blocked
    updateActivity(id: String!, input: UpdateActivityInput!): Activity! @blocked
    deleteActivity(id: String!): Activity! @blocked
  }
`
