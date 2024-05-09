
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Toaster } from '@/components/Toast/toaster'

const Home = lazy(() => import('./pages/Home'))
const ResultDetail = lazy(() => import('./pages/Result/ResultDetail'))
const GenerateResult = lazy(() => import('./pages/Result/GenerateResult'))
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
    path: '/result',
    element: <GenerateResult />
  },
  {
    path: '/result/:id',
    element: <ResultDetail />
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
    </Suspense>
  )
}

export default App
