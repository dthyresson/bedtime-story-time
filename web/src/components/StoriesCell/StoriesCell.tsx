import type { StoriesQuery, StoriesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import StoryCard from 'src/components/StoryCard/StoryCard'

export const QUERY: TypedDocumentNode<
  StoriesQuery,
  StoriesQueryVariables
> = gql`
  query StoriesQuery {
    stories {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ stories }: CellSuccessProps<StoriesQuery>) => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((item) => {
        return <StoryCard key={`story-${item.id}`} {...item} />
      })}
    </ul>
  )
}
