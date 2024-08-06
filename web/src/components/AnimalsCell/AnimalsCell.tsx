import type { AnimalsQuery, AnimalsQueryVariables } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { StoryOptionList, StoryOptionLink } from 'src/components/StoryOptions'

export const QUERY: TypedDocumentNode<
  AnimalsQuery,
  AnimalsQueryVariables
> = gql`
  query AnimalsQuery {
    animals {
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

export const Success = ({ animals }: CellSuccessProps<AnimalsQuery>) => {
  const { adjective, color, activity } = useParams()
  return (
    <StoryOptionList>
      {animals.map((item) => (
        <StoryOptionLink
          key={`animal-${item.id}-${item.name}`}
          options={{
            adjective,
            color,
            activity,
            animal: item.name,
          }}
          emoji={item.emoji}
          name={item.name}
        />
      ))}
    </StoryOptionList>
  )
}
