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
  code,
  name,
}) => {
  const sanitizedOptions = {
    adjectiveId: options.adjectiveId || '',
    animalId: options.animalId || '',
    colorId: options.colorId || '',
    activityId: options.activityId || '',
  }

  return (
    <li className="inline-block rounded-md border border-solid border-yellow-300 bg-white p-2 shadow-sm hover:bg-yellow-50">
      <Link to={routes.newStory(sanitizedOptions)} className="flex">
        <div className="mr-2">
          {code ? (
            <p
              className="mr-2 mt-1 h-4 w-4 rounded border border-black"
              style={{ backgroundColor: code }}
            />
          ) : (
            <p>{emoji}</p>
          )}
        </div>
        <p className="">{name}</p>
      </Link>
    </li>
  )
}
