import { Metadata } from '@redwoodjs/web'

import StoriesCell from 'src/components/StoriesCell'

const StoriesPage = () => {
  return (
    <>
      <Metadata title="Stories" description="Stories page" />

      <h1>StoriesPage</h1>
      <StoriesCell />
    </>
  )
}

export default StoriesPage
