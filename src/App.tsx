import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import Page404 from './pages/Page404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/project',
    element: <ProjectPage/>
  },
  {
    path: '/*',
    element: <Page404/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
