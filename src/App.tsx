
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy } from 'react'
import { Toaster } from '@/components/Toast/toaster'
import { Lang } from '@/components/Lang'

const AuthLayout = lazy(() => import('./Layout/AuthLayout'))
const Home = lazy(() => import('./pages/Home'))
const Result = lazy(() => import('./pages/Result'))
const User = lazy(() => import('./pages/User'))
const TravelList = lazy(() => import('./pages/User/TravelList'))
const SearchList = lazy(() => import('./pages/User/SearchList'))
const Settings = lazy(() => import('./pages/User/Settings'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/result/:id',
        element: <Result />
      },
      {
        path: '/user',
        element: <User />,
        children: [
          {
            path: '/user',
            element: <TravelList />
          },
          {
            path: '/user/search',
            element: <SearchList />
          },
          {
            path: '/user/settings',
            element: <Settings />
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading...</div>}
      >

      </RouterProvider>
      <Toaster />
      <Lang />
    </>
  )
}

export default App
