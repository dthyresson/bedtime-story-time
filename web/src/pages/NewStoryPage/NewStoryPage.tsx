import { useEffect, useState } from 'react'

import type {
  CreateStoryMutation,
  CreateStoryMutationVariables,
  GetStoryOptionsQuery,
  GetStoryOptionsQueryVariables,
} from 'types/graphql'

import { routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { Metadata } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'

import ActivitiesCell from 'src/components/ActivitiesCell'
import AdjectivesCell from 'src/components/AdjectivesCell'
import AnimalsCell from 'src/components/AnimalsCell'
import ColorsCell from 'src/components/ColorsCell'
import { StoryCaption } from 'src/components/StoryCaption'

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

const GET_STORY_OPTIONS_QUERY: TypedDocumentNode<
  GetStoryOptionsQuery,
  GetStoryOptionsQueryVariables
> = gql`
  query GetStoryOptionsQuery($input: StoryOptionsInput!) {
    storyOptions(input: $input) {
      adjective {
        id
        name
        emoji
      }
      animal {
        id
        name
        emoji
      }
      color {
        id
        name
        code
      }
      activity {
        id
        name
        emoji
      }
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
  const { data, loading, error } = useQuery(GET_STORY_OPTIONS_QUERY, {
    variables: { input: { adjectiveId, animalId, colorId, activityId } },
  })
  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)
  const [createStory] = useMutation(CREATE_STORY_MUTATION)
  const [writing, setWriting] = useState(false)
  const [writingError, setWritingError] = useState<string | null>(null)

  useEffect(() => {
    if (adjectiveId && animalId && colorId && activityId) {
      setWriting(true)
      createStory({
        variables: { input: { adjectiveId, animalId, colorId, activityId } },
        onCompleted(data, _clientOptions) {
          navigate(routes.story({ id: data.createStory.id }))
        },
        onError(error) {
          console.log('error.message', error.message)
          setWriting(false)
          setWritingError(error.message)
        },
      })
    }
  }, [adjectiveId, animalId, colorId, activityId, createStory])
  return (
    <>
      <Metadata
        title="Write a Story"
        description="Pick your animal, color, activity and style."
      />
      {writingError && (
        <p className="px-4 font-bold text-red-500">{writingError}</p>
      )}
      {!writing && !writingError && <StoryCaption {...data?.storyOptions} />}

      {writing && (
        <div className="flex items-center justify-center lg:h-[80vh]">
          <div className="max-w-full animate-pulse">
            <StoryCaption {...data?.storyOptions} />
          </div>
        </div>
      )}
      {!writing && !writingError && (
        <>
          {!adjectiveId && <AdjectivesCell />}
          {!animalId && <AnimalsCell />}
          {!colorId && <ColorsCell />}
          {!activityId && <ActivitiesCell />}
        </>
      )}
    </>
  )
}

export default NewStoryPage
