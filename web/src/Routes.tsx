// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import NewStoryPage from './pages/NewStoryPage/NewStoryPage'
import StoriesPage from './pages/StoriesPage/StoriesPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={StoriesPage} name="stories" />
        <Route path="/new" page={NewStoryPage} name="newStory" />
        <Route path="/new/{adjectiveId}" page={NewStoryPage} name="pickAnimal" />
        <Route path="/new/{adjectiveId}/{animalId}" page={NewStoryPage} name="pickColor" />
        <Route path="/new/{adjectiveId}/{animalId}/{colorId}" page={NewStoryPage} name="pickActivity" />
        <Route path="/story/{id}" page={StoryPage} name="story" />

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
