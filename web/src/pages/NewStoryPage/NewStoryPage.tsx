import { useEffect } from 'react'

import { routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ActivitiesCell from 'src/components/ActivitiesCell'
import AdjectivesCell from 'src/components/AdjectivesCell'
import AnimalsCell from 'src/components/AnimalsCell'
import ColorsCell from 'src/components/ColorsCell'

const NewStoryPage = ({
  adjective,
  animal,
  color,
  activity,
}: {
  adjective?: string
  animal?: string
  color?: string
  activity?: string
}) => {
  useEffect(() => {
    console.log('adjective', adjective)
    console.log('animal', animal)
    console.log('color', color)
    console.log('activity', activity)
    if (adjective && animal && color && activity) {
      console.log('all options are set')
      navigate(routes.writeStory({ adjective, animal, color, activity }))
    }
  }, [adjective, animal, color, activity])
  return (
    <>
      <Metadata title="NewStory" description="NewStory page" />

      <h1>NewStoryPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewStoryPage/NewStoryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newStory</code>, link to me with `
      </p>
      {adjective && <p>{adjective}</p>}
      {!adjective && <AdjectivesCell />}
      {animal && <p>{animal}</p>}
      {!animal && <AnimalsCell />}
      {color && <p>{color}</p>}
      {!color && <ColorsCell />}
      {activity && <p>{activity}</p>}
      {!activity && <ActivitiesCell />}
    </>
  )
}

export default NewStoryPage
