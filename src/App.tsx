
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy } from 'react'
import { Toaster } from '@/components/Toast/toaster'

const Home = lazy(() => import('./pages/Home'))
const Result = lazy(() => import('./pages/Result'))
const User = lazy(() => import('./pages/User'))
const List = lazy(() => import('./pages/User/List'))
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
    path: '/user/:id',
    element: <User />,
    children: [
      {
        path: '/user/:id/',
        element: <List title='保存的行程' />
      },
      {
        path: '/user/:id/search',
        element: <List title='最近搜索' />
      },
      {
        path: '/user/:id/settings',
        element: <Settings />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
