import { Link, routes } from '@redwoodjs/router'

type StoryCardProps = {
  id: string
  title: string
  summary: string
  pictureUrl: string
}

const StoryCard = ({ id, title, summary, pictureUrl }: StoryCardProps) => {
  return (
    <Link to={routes.story({ id })}>
      <div className="flex flex-col gap-4 rounded-md border border-gray-200 p-4">
        <img src={pictureUrl} alt={title} />
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </Link>
  )
}

export default StoryCard
