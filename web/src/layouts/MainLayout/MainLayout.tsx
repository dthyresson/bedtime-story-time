import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="container mx-auto px-4">
      <header className="py-4">
        <nav className="flex items-center justify-between">
          <Link to={routes.stories()}>
            <h1 className="font-serif text-2xl font-extrabold">
              📒 Bedtime Storytime
            </h1>
          </Link>
          <Link
            to={routes.newStory()}
            className="flex items-center justify-center rounded-md border border-yellow-300 bg-white p-2 text-center shadow-md hover:bg-yellow-50"
          >
            ✨ Tell me a story!
          </Link>
        </nav>
      </header>
      {children}
      <footer className="py-4">
        <p className="text-center">
          <a
            className="text-sm text-gray-500 hover:text-yellow-500"
            href="https://www.thyresson.io"
            target="_blank"
            rel="noreferrer"
          >
            Made with ❤️ by DT
          </a>
        </p>
      </footer>
    </main>
  )
}

export default MainLayout
