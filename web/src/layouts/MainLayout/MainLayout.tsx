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
            <h1 className="text-2xl font-bold">Bedtime Storytime</h1>
          </Link>
          <Link
            to={routes.newStory()}
            className="rounded border border-yellow-500 bg-yellow-50 px-4 py-2 font-bold text-gray-800 hover:bg-yellow-100"
          >
            Tell me a story!
          </Link>
        </nav>
      </header>
      {children}
      <footer className="py-4">
        <p className="text-center text-sm text-gray-500">Made with ❤️ by DT</p>
      </footer>
    </main>
  )
}

export default MainLayout
