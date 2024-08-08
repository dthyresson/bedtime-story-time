import { Metadata } from '@redwoodjs/web'

import StoriesCell from 'src/components/StoriesCell'

const StoriesPage = ({ language }: { language: string }) => {
  return (
    <>
      <Metadata
        title="All Stories"
        description="Pick a story to read or write your own."
      />

      <StoriesCell language={language} page={1} limit={10} />
    </>
  )
}

export default StoriesPage
