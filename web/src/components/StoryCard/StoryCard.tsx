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
      <div className="flex w-full flex-col gap-4 rounded-md border border-yellow-300 bg-yellow-50 p-4 shadow-md">
        <img
          className="w-full rounded-md bg-white object-cover shadow-md"
          src={pictureUrl}
          alt={title}
        />
        <div className="flex flex-grow flex-col gap-2 rounded-md border border-yellow-200 bg-white p-4">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="flex-grow text-sm text-gray-700">{summary}</p>
        </div>
      </div>
    </Link>
  )
}

export default StoryCard
