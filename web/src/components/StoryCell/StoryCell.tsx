import type { FindStoryQuery, FindStoryQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Story from 'src/components/Story/Story'

export const QUERY: TypedDocumentNode<
  FindStoryQuery,
  FindStoryQueryVariables
> = gql`
  query FindStoryQuery($id: String!) {
    story: story(id: $id) {
      id
      title
      story
      summary
      pictureUrl
      adjective {
        id
        name
      }
      animal {
        id
        name
      }
      color {
        id
        name
      }
      activity {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStoryQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  story,
}: CellSuccessProps<FindStoryQuery, FindStoryQueryVariables>) => {
  return <Story {...story} />
}
