import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import UserProvider from './context/UserProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <AuthLayout isLogin={false}>
            <Home />
            </AuthLayout>
        )


      },
      {
        path: '/login',
        element:
        (
          <AuthLayout isLogin={true}>
            <Login />
            </AuthLayout>
        )

      },
      {
        path: '/signup',
        element:
        (
          <AuthLayout isLogin={true} >
            <SignUp />
            </AuthLayout>
        )

      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
