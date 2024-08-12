import React from 'react'
import UserTurfs from '../../components/user/UserTurfs'
import TurfNavbar from '../../components/navbar/TurfNavbar'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../../components/navbar/UserNavbar'

const UserTurfsPage = () => {
  return (
    <div >
    <UserNavbar />
      <nav className=' pt-52'>
        <TurfNavbar />
      </nav>

      <Outlet />
    </div>
  )
}

export default UserTurfsPage
