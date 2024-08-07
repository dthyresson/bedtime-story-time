import { Link, routes } from '@redwoodjs/router'

type StoryCardProps = {
  id: string
  title: string
  summary: string
  pictureUrl: string
}

const StoryCard = ({ id, title, summary, pictureUrl }: StoryCardProps) => {
  return (
    <Link to={routes.story({ id })} className="flex h-full">
      <div className="flex w-full flex-col gap-4 rounded-md border border-gray-200 p-4">
        <img
          className="h-48 w-full rounded-md object-cover"
          src={pictureUrl}
          alt={title}
        />
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="flex-grow text-sm text-gray-700">{summary}</p>
      </div>
    </Link>
  )
}

export default StoryCard
