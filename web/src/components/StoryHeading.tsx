import { StoryOptions } from 'src/components/StoryOptions'

export const StoryHeading = ({
  adjective,
  animal,
  color,
  activity,
}: StoryOptions) => (
  <h1>
    Writing a {decodeURIComponent(adjective)} story about the{' '}
    {decodeURIComponent(color)} {decodeURIComponent(animal)} who{' '}
    {decodeURIComponent(activity)}
  </h1>
)
