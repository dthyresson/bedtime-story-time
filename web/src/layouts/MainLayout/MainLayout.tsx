import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="container mx-auto px-4">
      <header className="py-4">
        <nav className="flex items-center justify-between">
          <Link to={routes.stories()}>Home</Link>
          <Link to={routes.newStory()}>New Story</Link>
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
