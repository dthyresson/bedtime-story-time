// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import StoryCell from 'src/components/StoryCell'

const StoryPage = ({ id }: { id: string }) => {
  return (
    <>
      <Metadata title="Read aStory" />

      <StoryCell id={id} />
    </>
  )
}

export default StoryPage
