import { Metadata } from '@redwoodjs/web'

import StoriesCell from 'src/components/StoriesCell'

const StoriesPage = () => {
  return (
    <>
      <Metadata
        title="All Stories"
        description="Pick a story to read or write your own."
      />

      <StoriesCell />
    </>
  )
}

export default StoriesPage
