import fs from 'fs'
import path from 'path'

import { db } from 'api/src/lib/db'
import { parse } from 'json2csv'

import { getPaths } from '@redwoodjs/project-config'

export default async () => {
  try {
    // Fetch all stories from the database
    const stories = await db.story.findMany({
      include: {
        animal: true,
        color: true,
        adjective: true,
        activity: true,
      },
    })

    // Prepare the data for CSV export
    const csvData = stories.map((story) => ({
      id: story.id,
      title: story.title,
      summary: story.summary,
      story: story.story,
      description: story.description,
      pictureUrl: story.pictureUrl,
      animalId: story.animal.id,
      animalName: story.animal.name,
      colorId: story.color.id,
      colorName: story.color.name,
      adjectiveId: story.adjective.id,
      adjectiveName: story.adjective.name,
      activityId: story.activity.id,
      activityName: story.activity.name,
      createdAt: story.createdAt,
      updatedAt: story.updatedAt,
    }))

    // Convert the data to CSV format
    const csv = parse(csvData)

    // Generate a filename with the current timestamp (without milliseconds)
    const filename = `stories_export_${new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/:/g, '-')}.csv`

    // Write the CSV file
    const filePath = path.join(getPaths().base, 'exports', filename)
    fs.writeFileSync(filePath, csv)

    console.log(`Stories exported successfully to ${filePath}`)
  } catch (error) {
    console.error('Error exporting stories:', error)
  } finally {
    await db.$disconnect()
  }
}
