// import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { StoryHeading } from 'src/components/StoryHeading'
import { StoryOptions } from 'src/components/StoryOptions'

const WriteStoryPage = () => {
  const { adjective, animal, color, activity } = useParams() as StoryOptions
  return (
    <>
      <Metadata title="WriteStory" description="WriteStory page" />

      <StoryHeading
        adjective={adjective}
        animal={animal}
        color={color}
        activity={activity}
      />

      <p>
        Find me in{' '}
        <code>./web/src/pages/WriteStoryPage/WriteStoryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>writeStory</code>, link to me with `
      </p>
      <p>adjective: {adjective}</p>
      <p>animal: {animal}</p>
      <p>color: {color}</p>
      <p>activity: {activity}</p>
    </>
  )
}

export default WriteStoryPage
