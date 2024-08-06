// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'

import { ACTIVITIES } from '../data/activities'
import { ADJECTIVES } from '../data/adjectives'
import { ANIMALS } from '../data/animals'
import { COLORS } from '../data/colors'

export default async () => {
  try {
    await db.animal.createMany({
      data: ANIMALS,
    })
    await db.color.createMany({
      data: COLORS,
    })
    await db.adjective.createMany({
      data: ADJECTIVES,
    })
    await db.activity.createMany({
      data: ACTIVITIES,
    })

    console.info(
      '\n  No seed data, skipping. See scripts/seed.ts to start seeding your database!\n'
    )
  } catch (error) {
    console.error(error)
  }
}
