import React from 'react'
import { Global } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { globalStyles } from './styles/globals'
import { QueryClientProvider } from '@tanstack/react-query'
import { routes } from './libs/routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'
import queryClient from './libs/queryClient'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Global styles={globalStyles} />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}

export default App
