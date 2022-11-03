import React from 'react'
import { Global } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexPage from './pages'
import { globalStyles } from './styles/globals'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexPage />,
    },
    {
      path: '*',
      element: <IndexPage />,
    },
  ])

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
