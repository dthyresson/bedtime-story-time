export const StoryCaption = ({
  adjective,
  animal,
  color,
  activity,
}: {
  adjective?: { id: string; name: string; emoji: string }
  animal?: { id: string; name: string; emoji: string }
  color?: { id: string; name: string; code: string }
  activity?: { id: string; name: string; emoji: string }
}) => {
  const parts = []

  if (adjective) parts.push(`your ${adjective.name} story`)
  if (color && animal) parts.push(`about the ${color.name} ${animal.name} who`)
  else if (animal) parts.push(`about the ${animal.name}`)
  else if (color) parts.push(`about something ${color.name}`)
  if (activity) parts.push(`who ${activity.name}`)

  const caption =
    parts.length > 0 ? `Writing ${parts.join(' ')} ...` : 'Tell me a story ...'

  return <h1 className="mb-4 text-2xl font-bold">{caption}</h1>
}
