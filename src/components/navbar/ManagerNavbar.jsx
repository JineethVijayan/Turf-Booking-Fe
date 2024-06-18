import React from 'react'
import { Link } from 'react-router-dom'

const ManagerNavbar = () => {

    const navLinks = [
        {
            path: "/manager/home",
            value: "Home"
        },
        {
            path: "/manager/turf",
            value: "My Turf"
        },
        {
            path: "/manager/profile",
            value: "Profile"
        }
    ]

    return (
        <div className='flex justify-between p-4 text-xl shadow-lg '>
            <h1>Logo</h1>
            <ul className='flex items-center gap-x-5'>
                {navLinks.map((link, index) =>

                    <Link key={index} to={link.path} >{link.value}</Link>

                )}
            </ul>
        </div>
    )
}

export default ManagerNavbar
