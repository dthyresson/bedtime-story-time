import { useState } from 'react'

import { split } from 'sentence-splitter'

import { Link, routes, navigate } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import { languageNames } from 'src/components/LanguageSelector'

type StoryProps = {
  id: string
  activityId: string
  adjectiveId: string
  animalId: string
  colorId: string
  title: string
  summary: string
  description: string
  story: string
  pictureUrl: string
  language: string
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

const TRANSLATE_STORY = gql`
  mutation TranslateStoryMutation($input: TranslateStoryInput!) {
    translateStory(input: $input)
  }
`

const Story = ({
  id,
  adjectiveId,
  activityId,
  animalId,
  colorId,
  description,
  title,
  story,
  summary,
  pictureUrl,
  language,
}: StoryProps) => {
  const [translating, setTranslating] = useState(false)
  const [translateStory] = useMutation(TRANSLATE_STORY, {
    onCompleted: (data) => {
      setTranslating(false)
      navigate(routes.story({ id: data.translateStory }))
    },
  })

  const handleTranslate = async (language: string) => {
    setTranslating(true)
    try {
      await translateStory({
        variables: { input: { id, language } },
      })
    } catch (error) {
      console.error('Translation error:', error)
    }
  }

  return (
    <>
      <Metadata
        title={`${title}`}
        description={`${summary}`}
        ogImage={pictureUrl}
      />
      {translating && (
        <div className="flex h-[80vh] items-center justify-center bg-yellow-100">
          <div className="flex h-full items-center justify-center">
            <p className="animate-pulse text-xl font-bold text-black">
              Translating ...
            </p>
          </div>
        </div>
      )}
      {!translating && (
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
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <a
                    href={`/.redwood/functions/download?storyId=${id}`}
                    download={`${title.replace(/\s+/g, '_')}.jpg`}
                    className="rounded-md bg-white bg-opacity-75 px-2 py-1 text-sm font-medium text-gray-700 shadow-md hover:bg-opacity-100"
                  >
                    🖼️ Image
                  </a>
                  <a
                    href={`/.redwood/functions/pdf?storyId=${id}`}
                    download={`${title.replace(/\s+/g, '_')}.pdf`}
                    className="rounded-md bg-white bg-opacity-75 px-2 py-1 text-sm font-medium text-gray-700 shadow-md hover:bg-opacity-100"
                  >
                    📄 PDF
                  </a>
                </div>
              </div>
              <p className="my-2 max-w-fit text-sm text-gray-500">
                {description}
              </p>
            </div>
            <div className="order-first lg:order-none">
              <nav className="flex flex-wrap gap-2 sm:gap-4">
                <Link
                  className="flex-grow basis-[calc(50%-0.5rem)] items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center text-sm shadow-md hover:bg-yellow-50 sm:basis-auto sm:text-base"
                  to={routes.newStory()}
                >
                  ✨ New
                </Link>
                {language && language === 'en' && (
                  <>
                    <Link
                      className="flex-grow basis-[calc(50%-0.5rem)] items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center text-sm shadow-md hover:bg-yellow-50 sm:basis-auto sm:text-base"
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
                      className="flex-grow basis-[calc(50%-0.5rem)] items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center text-sm shadow-md hover:bg-yellow-50 sm:basis-auto sm:text-base"
                      to={routes.newStory({
                        activityId,
                        adjectiveId,
                        animalId,
                      })}
                    >
                      🔄 Color
                    </Link>
                    <Link
                      className="flex-grow basis-[calc(50%-0.5rem)] items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center text-sm shadow-md hover:bg-yellow-50 sm:basis-auto sm:text-base"
                      to={routes.newStory({
                        activityId,
                        adjectiveId,
                        colorId,
                      })}
                    >
                      🔄 Animal
                    </Link>
                    <Link
                      className="flex-grow basis-[calc(50%-0.5rem)] items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center text-sm shadow-md hover:bg-yellow-50 sm:basis-auto sm:text-base"
                      to={routes.newStory({
                        adjectiveId,
                        animalId,
                        colorId,
                      })}
                    >
                      🔄 Activity
                    </Link>
                  </>
                )}
              </nav>
              {language && language === 'en' && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {Object.keys(languageNames).map((lang) => (
                    <button
                      onClick={() => handleTranslate(lang)}
                      className="flex items-center gap-1 rounded-md border border-yellow-300 bg-white px-2 py-1 text-sm shadow-md hover:bg-yellow-50"
                      key={lang}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md border border-yellow-200 bg-white p-4 lg:w-2/3">
            <h1 className="font-serif text-2xl font-bold">{title}</h1>
            <h2 className="font-serif text-lg font-medium">{summary}</h2>
            <SplitStory text={story} />
          </div>
        </div>
      )}
    </>
  )
}

export default Story
