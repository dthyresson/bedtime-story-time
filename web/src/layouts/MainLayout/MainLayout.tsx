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
      <footer className="flex items-center justify-between py-4">
        <div className="text-sm text-gray-500">
          <a
            className="hover:text-yellow-500"
            href="https://www.thyresson.io"
            target="_blank"
            rel="noreferrer"
          >
            Made with ❤️ by DT
          </a>
        </div>
        <div className="space-x-4 text-sm text-gray-500">
          <Link to={routes.about()} className="hover:text-yellow-500">
            How it Works!
          </Link>
          <a
            href="https://github.com/dthyresson/bedtime-storytime"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            GitHub
          </a>
          <a
            href="https://www.redwoodjs.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            RedwoodJS
          </a>
          <a
            href="https://www.langbase.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            Langbase
          </a>
          <a
            href="https://www.fal.ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            Fal.ai
          </a>
          <a
            href="https://www.unkey.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            Unkey
          </a>
        </div>
      </footer>
    </main>
  )
}

export default MainLayout
