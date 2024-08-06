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
    activities: [Activity!]! @requireAuth
    activity(id: String!): Activity @requireAuth
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
    createActivity(input: CreateActivityInput!): Activity! @requireAuth
    updateActivity(id: String!, input: UpdateActivityInput!): Activity!
      @requireAuth
    deleteActivity(id: String!): Activity! @requireAuth
  }
`
