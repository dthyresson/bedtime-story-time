import { useState } from 'react'

import type { StoriesQuery, StoriesQueryVariables } from 'types/graphql'

import type {
  // CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'

import LanguageSelector from 'src/components/LanguageSelector'
import StoryCard from 'src/components/StoryCard/StoryCard'

export const beforeQuery = (props) => {
  return {
    variables: props,
  }
}

export const QUERY: TypedDocumentNode<
  StoriesQuery,
  StoriesQueryVariables
> = gql`
  query StoriesQuery($page: Int, $limit: Int, $language: String) {
    stories(page: $page, limit: $limit, language: $language) {
      items {
        id
        title
        story
        summary
        pictureUrl
        adjective {
          id
          name
        }
        animal {
          id
          name
        }
        color {
          id
          name
        }
        activity {
          id
          name
        }
      }
      count
      page
      limit
      language
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ onLanguageChange, currentLanguage }) => {
  return (
    <div>
      <LanguageSelector
        language={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
      <div className="flex w-full justify-center p-8 lg:mx-auto lg:w-1/2">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-yellow-300 p-12 text-center hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="mt-2 block text-lg font-semibold text-yellow-900">
            No stories yet in that language.
          </span>
        </button>
      </div>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ stories, language }) => {
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [currentPage, setCurrentPage] = useState(stories.page)
  const { data, loading, error, refetch } = useQuery<
    StoriesQuery,
    StoriesQueryVariables
  >(QUERY, {
    variables: {
      page: currentPage,
      limit: stories.limit,
      language: currentLanguage,
    },
  })

  if (loading) return <Loading />
  if (error) return <Failure error={error} />
  if (!data || !data.stories || data.stories.items.length === 0)
    return (
      <Empty
        onLanguageChange={(event) => {
          const newLanguage = event.target.value
          setCurrentLanguage(newLanguage)
          setCurrentPage(1)
          refetch({ page: 1, language: newLanguage })
        }}
        currentLanguage={currentLanguage}
      />
    )

  const totalPages = Math.ceil(data.stories.count / data.stories.limit)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value
    setCurrentLanguage(newLanguage)
    setCurrentPage(1)
    refetch({ page: 1, language: newLanguage })
  }

  return (
    <>
      <LanguageSelector
        language={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.stories.items.map((item) => (
          <StoryCard key={`story-${item.id}`} {...item} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => (
  <div className="mt-8 flex justify-center">
    <button
      onClick={() => onPageChange(1)}
      disabled={currentPage === 1}
      className="mr-2 rounded border border-yellow-300 bg-yellow-50 px-4 py-2 text-black disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
    >
      ⏮️
    </button>
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="mr-2 rounded border border-yellow-300 bg-yellow-50 px-4 py-2 text-black disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
    >
      ◀️
    </button>
    <span className="mx-4 py-2">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="ml-2 rounded border border-yellow-300 bg-yellow-50 px-4 py-2 text-black disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
    >
      ▶️
    </button>
    <button
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage === totalPages}
      className="ml-2 rounded border border-yellow-300 bg-yellow-50 px-4 py-2 text-black disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
    >
      ⏭️
    </button>
  </div>
)
