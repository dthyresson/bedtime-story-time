// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import StoryCell from 'src/components/StoryCell'

const StoryPage = ({ id }: { id: string }) => {
  return (
    <>
      <Metadata title="Story" description="Story page" />

      <h1>StoryPage</h1>
      <p>
        Find me in <code>./web/src/pages/StoryPage/StoryPage.tsx</code>
      </p>
      <StoryCell id={id} />
    </>
  )
}

export default StoryPage
