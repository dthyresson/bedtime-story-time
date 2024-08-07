import { useEffect } from 'react'

import type {
  CreateStoryMutation,
  CreateStoryMutationVariables,
} from 'types/graphql'

import { routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { Metadata } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'

import ActivitiesCell from 'src/components/ActivitiesCell'
import AdjectivesCell from 'src/components/AdjectivesCell'
import AnimalsCell from 'src/components/AnimalsCell'
import ColorsCell from 'src/components/ColorsCell'

const CREATE_STORY_MUTATION: TypedDocumentNode<
  CreateStoryMutation,
  CreateStoryMutationVariables
> = gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      id
    }
  }
`

const NewStoryPage = ({
  adjectiveId,
  animalId,
  colorId,
  activityId,
}: {
  adjectiveId?: string
  animalId?: string
  colorId?: string
  activityId?: string
}) => {
  const [createStory] = useMutation(CREATE_STORY_MUTATION)

  useEffect(() => {
    console.log('adjectiveId', adjectiveId)
    console.log('animalId', animalId)
    console.log('colorId', colorId)
    console.log('activityId', activityId)
    if (adjectiveId && animalId && colorId && activityId) {
      console.log('all options are set')
      createStory({
        variables: { input: { adjectiveId, animalId, colorId, activityId } },
        onCompleted(data, _clientOptions) {
          navigate(routes.story({ id: data.createStory.id }))
        },
      })
    }
  }, [adjectiveId, animalId, colorId, activityId, createStory])
  return (
    <>
      <Metadata title="NewStory" description="NewStory page" />
      {adjectiveId && <p>{adjectiveId}</p>}
      {!adjectiveId && <AdjectivesCell />}
      {animalId && <p>{animalId}</p>}
      {!animalId && <AnimalsCell />}
      {colorId && <p>{colorId}</p>}
      {!colorId && <ColorsCell />}
      {activityId && <p>{activityId}</p>}
      {!activityId && <ActivitiesCell />}
    </>
  )
}

export default NewStoryPage
