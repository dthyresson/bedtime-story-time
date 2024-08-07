import { Metadata } from '@redwoodjs/web'

import StoriesCell from 'src/components/StoriesCell'

const StoriesPage = () => {
  return (
    <>
      <Metadata title="Stories" description="Stories page" />

      <StoriesCell />
    </>
  )
}

export default StoriesPage
