import { createBrowserRouter, RouterProvider } from 'react-router'

import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import Page404 from './pages/Page404'
import Footer from './components/Footer/Footer'
import ParallaxBG from './components/ParallaxBG/ParallaxBG'

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
      <div style={{position: 'relative'}}>
        <ParallaxBG/>
        <RouterProvider router={router}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
