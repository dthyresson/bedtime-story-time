import type { AdjectivesQuery, AdjectivesQueryVariables } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { StoryOptionList, StoryOptionLink } from 'src/components/StoryOptions'

export const QUERY: TypedDocumentNode<
  AdjectivesQuery,
  AdjectivesQueryVariables
> = gql`
  query AdjectivesQuery {
    adjectives {
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

export const Success = ({ adjectives }: CellSuccessProps<AdjectivesQuery>) => {
  const { animalId, colorId, activityId } = useParams()
  return (
    <StoryOptionList>
      {adjectives.map((item) => (
        <StoryOptionLink
          key={`adjective-${item.id}-${item.name}`}
          options={{
            adjectiveId: item.id,
            animalId,
            colorId,
            activityId,
          }}
          id={item.id}
          emoji={item.emoji}
          name={item.name}
        />
      ))}
    </StoryOptionList>
  )
}
