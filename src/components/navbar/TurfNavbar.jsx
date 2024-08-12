import React from 'react'
import { Link } from 'react-router-dom'

const TurfNavbar = () => {

 
    const navLinks = [
        {
            path: "/user/turfs/all",
            value: "All"
        },
        {
            path: "/user/turfs/badminton",
            value: "Badminton"
        },
        {
            path: "/user/turfs/football",
            value: "Football"
        },
        {
            path: "/user/turfs/swimming",
            value: "Swimming"
        },
        {
            path: "/user/turfs/cricket",
            value: "Cricket"
        },
        {
            path: "/user/turfs/tennis",
            value: "Tennis",
        },
        {
            path: "/user/turfs/tabletennis",
            value: "Table Tennis"
        }
    ]

    return (
        <div className='flex justify-center p-4 text-xl  w-full  '>
            
            <ul className='flex items-center gap-x-5'>
                {navLinks.map((link, index) =>

                    <Link key={index} to={link.path} >
                        <li className='text-green-800 px-5 '>{link.value}</li>
                    </Link>

                )}
            </ul>
        </div>
    )
}

export default TurfNavbar
