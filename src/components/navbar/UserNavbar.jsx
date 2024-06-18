import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {

    const navLinks = [
        {
            path: "/user/home",
            value: "Home"
        },
        {
            path: "/user/turfs",
            value: "Turfs"
        },
        {
            path: "/user/bookings",
            value: "Bookings"
        },
        {
            path: "/user/profile",
            value: "Profile"
        }
    ]

    return (
        <div className='flex justify-between p-4 text-xl shadow-lg'>
            <h1>Logo</h1>
            <ul className='flex items-center gap-x-5'>
                {navLinks.map((link, index) =>

                    <Link key={index} to={link.path} > {link.value}</Link>

                )}
            </ul>
        </div>
    )
}

export default UserNavbar
