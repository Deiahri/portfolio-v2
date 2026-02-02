import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse } from 'react-router'

import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import Page404 from './pages/Page404'
import ParallaxBG from './components/ParallaxBG/ParallaxBG'
import useAnalytics from './hooks/useAnalytics'
import AnalyticsBanner from './components/AnalyticsBanner/AnalyticsBanner'
import PrivacyPage from './pages/PrivacyPage'

function RootErrorBoundary() {
  const error = useRouteError()
  const { posthog } = useAnalytics()

  if (error) {
    posthog?.captureException(error)
  }

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    ErrorBoundary: RootErrorBoundary,
  },
  {
    path: '/project',
    element: <ProjectPage/>,
    ErrorBoundary: RootErrorBoundary,
  },
  {
    path: '/privacy',
    element: <PrivacyPage/>,
    ErrorBoundary: RootErrorBoundary,
  },
  {
    path: '/*',
    element: <Page404/>,
    ErrorBoundary: RootErrorBoundary,
  }
])

function App() {
  return (
    <>
      <div style={{position: 'relative'}}>
        <ParallaxBG/>
        <RouterProvider router={router}/>
        <AnalyticsBanner />
      </div>
    </>
  )
}

export default App
