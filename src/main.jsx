import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserSignupPage from './pages/user/UserSignupPage';
import UserSignInPage from './pages/user/UserSignInPage';
import ManagerSignupPage from './pages/manager/ManagerSignupPage';
import ManagerSigninPage from './pages/manager/ManagerSigninPage';
import Navbar from './components/navbar/Navbar';
import ManagerDashbordPage from './pages/manager/ManagerDashbordPage';
import UserDashbordPage from './pages/user/UserDashbordPage';
import HomeLayout from './layout/HomeLayout';
import App from './App';
import UserLayout from './layout/UserLayout';
import ManagerLayout from './layout/ManagerLayout';




const router = createBrowserRouter([
  {
    element:<HomeLayout />,
    children:[
      {
        path:"/",
        element:<App />
      },
      {
        path: "/user/signup",
        element: <UserSignupPage />,
      },
      {
        path:"/user/signin",
        element:<UserSignInPage />
      },
      {
        path:"/manager/signup",
        element:<ManagerSignupPage />
      },
      {
        path:"/manager/signin",
        element:<ManagerSigninPage />
      },
    ]
  },
  
  {
    element:<UserLayout />,
    children:[
      {
        path:"/user/dashbord",
        element: <UserDashbordPage />
      }
    ]
  },
 
  
  {
    element:<ManagerLayout />,
    children:[
      {
        path:"manager/dashbord",
        element: <ManagerDashbordPage />
      }
    ]
  }


  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
