import Layout from '@/layouts/Layout'
import { createBrowserRouter } from 'react-router-dom'
import AuthRoutes from './AuthRoute'
import UserRoutes from './UserRoute'
import PostRoutes from './PostRoute'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: AuthRoutes
  },
  {
    path: '/',
    element: <Layout />,
    children: UserRoutes
  },
  {
    path: '/',
    element: <Layout />,
    children: PostRoutes
  }
])

export default routes
