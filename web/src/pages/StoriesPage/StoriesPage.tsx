import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const StoriesPage = () => {
  return (
    <>
      <Metadata title="Stories" description="Stories page" />

      <h1>StoriesPage</h1>
      <p>
        Find me in <code>./web/src/pages/StoriesPage/StoriesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>stories</code>, link to me with `
        <Link to={routes.stories()}>Stories</Link>`
      </p>
    </>
  )
}

export default StoriesPage
