
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Result = lazy(() => import('./pages/Result'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/result/:id',
    element: <Result />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
