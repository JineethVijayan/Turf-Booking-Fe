import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className='relative'>
      <nav className=''>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  )
}

export default HomeLayout
