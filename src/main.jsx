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
import AdminDashbord from './components/admin/AdminDashbord';
import AdminDashbordPage from './pages/admin/AdminDashbordPage';
import AdminLayout from './layout/AdminLayout';
import AddTurfPage from './pages/manager/AddTurfPage';
import UserTurfsPage from './pages/user/UserTurfsPage';
import AdminTurfsPage from './pages/admin/AdminTurfsPage';
import UpdateformPage from './pages/admin/UpdateformPage';




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
      },
      {
        path:"/user/turfs",
        element:<UserTurfsPage />
      }
    ]
  },
 
  
  {
    element:<ManagerLayout />,
    children:[
      {
        path:"/manager/dashbord",
        element: <ManagerDashbordPage />
      },
      {
        path:"/manager/add-turf",
        element:<AddTurfPage />
      }
    ]
  },

{
  element:<AdminLayout />,
  children:[
    {
      path:'/admin/dashbord',
      element:<AdminDashbordPage />
    },
    {
      path:"/admin/turfs",
      element:<AdminTurfsPage />
    },
    {
      path:"/admin/turfs/update/:id",
      element:<UpdateformPage />
    }
  ]
}
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
