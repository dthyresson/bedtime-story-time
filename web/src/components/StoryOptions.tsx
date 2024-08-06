import { Link, routes } from '@redwoodjs/router'

export type StoryOptions = {
  adjective: string
  animal: string
  color: string
  activity: string
}

export const StoryOptionList: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-2">
    {children}
  </ul>
)

interface StoryOptionLinkProps {
  options: {
    adjective?: string
    animal?: string
    color?: string
    activity?: string
  }
  code?: string
  emoji?: string
  name: string
}

export const StoryOptionLink: React.FC<StoryOptionLinkProps> = ({
  options,
  emoji,
  name,
}) => {
  const sanitizedOptions = {
    adjective: options.adjective || '',
    animal: options.animal || '',
    color: options.color || '',
    activity: options.activity || '',
  }

  return (
    <li className="border border-solid border-yellow-300 bg-white rounded-md shadow-sm p-2 max-w-fit">
      <Link to={routes.newStory(sanitizedOptions)}>
        {emoji} {name}
      </Link>
    </li>
  )
}
