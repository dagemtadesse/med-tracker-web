import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/login'
import ResetPassword from './pages/ResetPassword'
import Start from './pages/Start'

const router = createBrowserRouter([
  { path: '/', element: <Start /> },
  { path: '/home', element: <Home /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/login', element: <Login /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
