import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import Markdown from 'src/components/Markdown/Markdown'

import AboutCard from './AboutCard'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About Bedtime Storytime" />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-center font-serif text-5xl font-bold text-gray-800">
          Bedtime Storytime
        </h1>

        <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-gray-600">
          Personalized AI-Powered Bedtime Stories
        </h2>

        <p className="mx-auto mb-4  text-center font-serif text-lg text-gray-600">
          Welcome to Bedtime Storytime, a magical app that brings the joy of
          personalized bedtime stories to children and parents alike. Using
          cutting-edge AI technology and a delightful user interface, we create
          unique, colorful tales tailored to your child&apos;s imagination.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Choose Your Adventure"
            description="Pick a style, an animal, a color, and an activity to start your unique story."
          />
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            }
            title="AI Magic"
            description="Our AI, powered by Langbase and OpenAI, crafts a unique story based on your choices."
          />
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            title="Visual Delight"
            description="An AI-generated image brings your story to life, creating a complete experience."
          />
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            }
            title="Personalized Stories"
            description="Every story is unique, based on your choices and preferences."
          />
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            title="AI-Generated Illustrations"
            description="Each tale comes with its own custom image to enhance the story."
          />
          <AboutCard
            icon={
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            }
            title="Easy Sharing"
            description="Download your stories as PDFs or images to share with loved ones."
          />
        </div>

        <h2 className="mb-3 mt-6 text-2xl font-semibold">Technology Stack</h2>
        <p className="mb-4">
          Bedtime Storytime is built using modern, robust technologies:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>
              <a
                href="https://redwoodjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                RedwoodJS
              </a>
            </strong>
            : A full-stack JavaScript framework for building ambitious web
            applications.
          </li>
          <li>
            <strong>
              <a
                href="https://www.langbase.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                Langbase
              </a>
            </strong>
            : Composable AI infrastructure for generating stories and image
            prompts.
          </li>
          <li>
            <strong>
              <a
                href="https://fal.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                Fal.ai
              </a>
            </strong>
            : AI image generation service.
          </li>
          <li>
            <strong>
              <a
                href="https://unkey.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                Unkey
              </a>
            </strong>
            : Rate limiting for GraphQL requests.
          </li>
          <li>
            <strong>
              <a
                href="https://www.sqlite.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                SQLite
              </a>
            </strong>
            : Lightweight database for storing stories.
          </li>
          <li>
            <strong>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                TailwindCSS
              </a>
            </strong>
            : Utility-first CSS framework for sleek, responsive design.
          </li>
          <li>
            <strong>
              <a
                href="https://cursor.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                Cursor
              </a>
            </strong>
            : AI-powered code editor for writing code. This about page was
            written by Cursor.
          </li>
        </ul>

        <p className="mt-4">
          You can find the source code for this app on{' '}
          <a
            href="https://github.com/dthyresson/bedtime-storytime"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:underline"
          >
            GitHub
          </a>
          .
        </p>

        <h2 className="mb-3 mt-6 text-2xl font-semibold text-gray-900">
          Story Generation
        </h2>
        <p className="mb-4">
          The heart of Bedtime Storytime lies in its AI-powered story
          generation. Here&apos;s a glimpse into how we create each unique tale:
        </p>
        <Markdown>
          {`\`\`\`ts
export const bedtimeStoryWriter = async ({
  adjective,
  animal,
  color,
  activity,
}: {
  adjective: string
  animal: string
  color: string
  activity: string
}) => {
  // Langbase API call to generate the story
  const response = await fetch('https://api.langbase.com/beta/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: \`Bearer \${process.env.BEDTIME_STORY_WRITER_PIPE_API_KEY}\`,
    },
    body: JSON.stringify({
      stream: false,
      variables: [
        { name: 'adjective', value: adjective },
        { name: 'animal', value: animal },
        { name: 'color', value: color },
        { name: 'activity', value: activity },
      ],
    }),
  })

  if (response.ok) {
    const { completion } = await response.json()
    return JSON.parse(completion)
  }

  throw new Error('Failed to generate bedtime story')
}`}
        </Markdown>

        <p className="mt-4">
          This function sends your chosen story elements to our Langbase AI
          model, which then crafts a unique, engaging story. The result includes
          a title, summary, and the full story text.
        </p>

        <h2 className="mb-3 mt-6 text-2xl font-semibold">Image Generation</h2>
        <p className="mb-4">
          To bring your story to life visually, we use Fal.ai:
        </p>
        <Markdown>
          {`\`\`\`ts
export const generatePictureUrl = async ({
  description,
  adjective,
  animal,
  color,
}: {
  description: string
  adjective: string
  animal: string
  color: string
}) => {
  const prompt = \`
    Illustrate: "\${description}". In \${adjective} children's story style. Paint the \${animal} the color \${color}.
  \`

  const result = await fal.run(\`fal-ai/flux/schnell\`, {
    input: { prompt },
    image_size: 'square',
    num_images: 1,
    num_inference_steps: 6,
    enable_safety_checker: true,
  })

  return result.images[0].url
}`}
        </Markdown>

        <p className="mt-4">
          This function takes the story description and key elements to generate
          a custom illustration that perfectly matches your tale.
        </p>

        <h2 className="mb-3 mt-6 text-2xl font-semibold">GraphQL Directives</h2>
        <p className="mb-4">
          Our application uses custom GraphQL directives to manage access
          control and rate limiting. Here are two key directives:
        </p>

        <h3 className="mb-2 text-xl font-semibold">@blocked Directive</h3>
        <p className="mb-4">
          This directive is used to prevent access to certain fields, queries,
          or mutations.
        </p>
        <Markdown>
          {`\`\`\`ts
import {
  AuthenticationError,
  createValidatorDirective,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'

export const schema = gql\`
  """
  Use @blocked to validate access to a field, query or mutation.
  """
  directive @blocked on FIELD_DEFINITION
\`

const validate: ValidatorDirectiveFunc = ({ directiveArgs }) => {
  logger.warn(
    {
      directiveArgs,
    },
    'Blocked directive called'
  )

  throw new AuthenticationError(
    'You are not authorized to access this resource'
  )
}

const blocked = createValidatorDirective(schema, validate)

export default blocked`}
        </Markdown>

        <h3 className="mb-2 mt-6 text-xl font-semibold">
          @rateLimited Directive
        </h3>
        <p className="mb-4">
          This directive is used to implement rate limiting on specific fields,
          queries, or mutations.
        </p>
        <Markdown>
          {`\`\`\`ts import { AuthenticationError } from '@redwoodjs/graphql-server'
import {
  createValidatorDirective,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'
import { StoryWriterRatelimit } from 'src/lib/unkey'

export const schema = gql\`
  """
  Use @rateLimited to validate access to a field, query or mutation.
  """
  directive @rateLimited(identifier: String!) on FIELD_DEFINITION
\`

const validate: ValidatorDirectiveFunc = async ({ directiveArgs }) => {
  const limit = await StoryWriterRatelimit.limit(directiveArgs.identifier)
  if (!limit.success) {
    logger.warn(
      {
        identifier: directiveArgs.identifier,
        limit,
      },
      'Rate limit exceeded'
    )
    throw new AuthenticationError('Too busy. Try again later.')
  }

  return
}

const rateLimited = createValidatorDirective(schema, validate)

export default rateLimited`}
        </Markdown>

        <p className="mt-4">
          These directives are applied in our GraphQL schema, as seen in the
          stories SDL:
        </p>
        <Markdown>
          {`\`\`\`graphql type Mutation {
  createStory(input: CreateStoryInput!): Story!
    @rateLimited(identifier: "createStory")
  updateStory(id: String!, input: UpdateStoryInput!): Story! @blocked
  deleteStory(id: String!): Story! @blocked
}`}
        </Markdown>

        <p className="mt-4">
          By using these directives, we can effectively control access and
          prevent abuse of our API endpoints.
        </p>

        <h2 className="mb-3 mt-6 text-2xl font-semibold">Get Started</h2>
        <p className="mb-4">
          Ready to create your own magical bedtime story?{' '}
          <Link
            to={routes.newStory()}
            className="text-yellow-600 hover:underline"
          >
            Click here to start your adventure
          </Link>{' '}
          and let your imagination run wild!
        </p>
      </div>
    </>
  )
}

export default AboutPage
