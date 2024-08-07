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
      __typename
      id
      title
      story
      summary
      description
      pictureUrl
      adjective {
        __typename
        id
        name
        emoji
      }
      animal {
        __typename
        id
        name
        emoji
      }
      color {
        __typename
        id
        name
        code
      }
      activity {
        __typename
        id
        name
        emoji
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
  const {
    title,
    summary,
    story: storyText,
    description,
    pictureUrl,
    adjective,
    animal,
    color,
    activity,
  } = story
  return (
    <Story
      id={story.id}
      title={title}
      summary={summary}
      story={storyText}
      description={description}
      pictureUrl={pictureUrl}
      activityId={activity.id}
      adjectiveId={adjective.id}
      animalId={animal.id}
      colorId={color.id}
    />
  )
}
