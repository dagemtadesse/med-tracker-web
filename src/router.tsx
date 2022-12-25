import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ResetPassword from './pages/ReserPassword'
import Start from './pages/Start'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start/>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
])

export default router
