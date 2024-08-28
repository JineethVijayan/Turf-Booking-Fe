import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navLinks = [
        {
            path: '/user/signup',
            value: "User"
        },
        {
            path: '/manager/signup',
            value: "Manager"
        }
    ]

    return (
        <div className="flex justify-between p-4 text-2xl fixed  w-screen bg-[#f1faee] ">
            <Link to={'/'}>
                <div class="flex items-center justify-center h-screen bg-gray-50">
                    <h1 class="text-5xl md:text-7xl font-extrabold text-gray-800">
                        <span class="text-green-600">Athleti</span>
                        <span class="text-yellow-500">X</span>
                    </h1>
                </div>
            </Link>
            <ul className='flex items-center gap-x-5 '>
                {navLinks.map((link, index) =>
                    <Link key={index} to={link.path} >
                        <li className='text-[#007200] px-5 '>{link.value}</li>
                    </Link>
                )}
            </ul>


        </div>
    )
}

export default Navbar
