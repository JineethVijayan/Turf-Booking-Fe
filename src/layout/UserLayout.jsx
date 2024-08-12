import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navbar/UserNavbar'
import Footer from '../components/user/Footer'

const UserLayout = () => {
    return (
        <div className=''>
            <nav className=' '>
                <UserNavbar />
            </nav>

            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout
