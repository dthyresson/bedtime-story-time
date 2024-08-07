import type { ActivitiesQuery, ActivitiesQueryVariables } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { StoryOptionList, StoryOptionLink } from 'src/components/StoryOptions'

export const QUERY: TypedDocumentNode<
  ActivitiesQuery,
  ActivitiesQueryVariables
> = gql`
  query ActivitiesQuery {
    activities {
      id
      name
      emoji
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ activities }: CellSuccessProps<ActivitiesQuery>) => {
  const { adjectiveId, animalId, colorId } = useParams()
  return (
    <StoryOptionList>
      {activities.map((item) => (
        <StoryOptionLink
          key={`activity-${item.id}-${item.name}`}
          options={{
            adjectiveId,
            animalId,
            colorId,
            activityId: item.id,
          }}
          id={item.id}
          emoji={item.emoji}
          name={item.name}
        />
      ))}
    </StoryOptionList>
  )
}
