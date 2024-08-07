import { Link, routes } from '@redwoodjs/router'

export type StoryOptions = {
  adjectiveId: string
  animalId: string
  colorId: string
  activityId: string
}

export const StoryOptionList: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <ul className="my-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
    {children}
  </ul>
)

interface StoryOptionLinkProps {
  options: {
    adjectiveId?: string
    animalId?: string
    colorId?: string
    activityId?: string
  }
  code?: string
  emoji?: string
  id: string
  name: string
}

export const StoryOptionLink: React.FC<StoryOptionLinkProps> = ({
  options,
  emoji,
  name,
}) => {
  const sanitizedOptions = {
    adjectiveId: options.adjectiveId || '',
    animalId: options.animalId || '',
    colorId: options.colorId || '',
    activityId: options.activityId || '',
  }

  return (
    <li className="max-w-fit rounded-md border border-solid border-yellow-300 bg-white p-2 shadow-sm">
      <Link to={routes.newStory(sanitizedOptions)}>
        {emoji} {name}
      </Link>
    </li>
  )
}
