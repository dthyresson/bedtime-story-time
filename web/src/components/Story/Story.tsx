import { split } from 'sentence-splitter'
import { Adjective, Activity, Animal, Color } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

type StoryProps = {
  id: string
  title: string
  story: string
  summary: string
  description: string
  pictureUrl: string
  adjective: Adjective
  activity: Activity
  animal: Animal
  color: Color
}

const SplitStory = ({ text }: { text: string }) => {
  const sentences = split(text)
  return (
    <div className="space-y-2">
      {sentences.map((sentence, index) => (
        <p key={index} className="text-md font-serif">
          {sentence.raw.trim()}
        </p>
      ))}
    </div>
  )
}

const Story = ({
  adjective,
  activity,
  animal,
  color,
  description,
  title,
  story,
  summary,
  pictureUrl,
}: StoryProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-yellow-100 p-4 lg:flex-row">
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <div className="rounded-md border border-yellow-200 bg-white p-4">
          <img
            src={pictureUrl}
            alt={title}
            className="w-full rounded-md shadow-md lg:h-96"
          />
          <p className="my-2 max-w-fit text-sm text-gray-500">{description}</p>
        </div>
        <div className="order-first lg:order-none">
          <nav className="flex gap-4">
            <Link
              className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
              to={routes.newStory()}
            >
              ✨ New
            </Link>
            <Link
              className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
              to={routes.newStory({
                activityId: activity.id,
                adjectiveId: adjective.id,
                animalId: animal.id,
                colorId: color.id,
              })}
            >
              🎉 Again!
            </Link>
            <Link
              className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
              to={routes.newStory({
                activityId: activity.id,
                adjectiveId: adjective.id,
                animalId: animal.id,
              })}
            >
              🔄 Color
            </Link>
            <Link
              className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
              to={routes.newStory({
                activityId: activity.id,
                adjectiveId: adjective.id,
                colorId: color.id,
              })}
            >
              🔄 Animal
            </Link>
            <Link
              className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
              to={routes.newStory({
                adjectiveId: adjective.id,
                animalId: animal.id,
                colorId: color.id,
              })}
            >
              🔄 Activity
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-yellow-200 bg-white p-4 lg:w-2/3">
        <h1 className="font-serif text-2xl font-bold">{title}</h1>
        <h2 className="font-serif text-lg font-medium">{summary}</h2>
        <SplitStory text={story} />
      </div>
    </div>
  )
}

export default Story
