
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Toaster } from '@/components/Toast/toaster'
import { Lang } from '@/components/Lang'

const Home = lazy(() => import('./pages/Home'))
const Result = lazy(() => import('./pages/Result'))
const User = lazy(() => import('./pages/User'))
const TravelList = lazy(() => import('./pages/User/TravelList'))
const SearchList = lazy(() => import('./pages/User/SearchList'))
const Settings = lazy(() => import('./pages/User/Settings'))

const router = createBrowserRouter([
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
])

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
      <Toaster />
      <Lang />
    </Suspense>
  )
}

export default App
