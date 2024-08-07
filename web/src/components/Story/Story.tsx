import { split } from 'sentence-splitter'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

type StoryProps = {
  activityId: string
  adjectiveId: string
  animalId: string
  colorId: string
  title: string
  summary: string
  description: string
  story: string
  pictureUrl: string
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
  adjectiveId,
  activityId,
  animalId,
  colorId,
  description,
  title,
  story,
  summary,
  pictureUrl,
}: StoryProps) => {
  return (
    <>
      <Metadata
        title={`${title}`}
        description={`${summary}`}
        ogImage={pictureUrl}
      />

      <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-yellow-100 p-4 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <div className="rounded-md border border-yellow-200 bg-white p-4">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 animate-pulse bg-yellow-200"></div>
              <img
                src={pictureUrl}
                alt={title}
                className="absolute inset-0 h-full w-full rounded-md object-cover shadow-md"
                loading="lazy"
              />
            </div>
            <p className="my-2 max-w-fit text-sm text-gray-500">
              {description}
            </p>
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
                  activityId,
                  adjectiveId,
                  animalId,
                  colorId,
                })}
              >
                🎉 Again!
              </Link>
              <Link
                className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
                to={routes.newStory({
                  activityId,
                  adjectiveId,
                  animalId,
                })}
              >
                🔄 Color
              </Link>
              <Link
                className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
                to={routes.newStory({
                  activityId,
                  adjectiveId,
                  colorId,
                })}
              >
                🔄 Animal
              </Link>
              <Link
                className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
                to={routes.newStory({
                  adjectiveId,
                  animalId,
                  colorId,
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
    </>
  )
}

export default Story
