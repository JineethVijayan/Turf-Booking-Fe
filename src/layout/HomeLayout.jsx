import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  )
}

export default HomeLayout
