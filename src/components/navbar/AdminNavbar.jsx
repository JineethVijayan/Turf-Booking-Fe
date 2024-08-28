import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            path: "/admin/turfs",
            value: "Turfs"
        },
        {
            path: "/admin/managers",
            value: "Managers"
        },
        {
            path: "/admin/users",
            value: "Users"
        },
        {
            path: "/admin/profile",
            value: "Profile"
        }
    ]





    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" bg-[#f1faee] p-4  fixed w-full">
            <div className="container mx-auto flex justify-between items-center">

                <div class="flex items-center justify-center  bg-gray-50">
                    <h1 class="text-3xl md:text-3xl font-extrabold text-gray-800">
                        <span class="text-green-600">Athleti</span>
                        <span class="text-yellow-500">X</span>
                    </h1>
                </div>

                <ul className='hidden md:flex space-x-4 text-xl'>
                    {navLinks.map((link, index) =>

                        <Link key={index} to={link.path} >
                            <li className='text-green-800 px-5 '>{link.value}</li>
                        </Link>

                    )}
                </ul>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (

                <ul className='md:hidden flex flex-col space-y-2 mt-4'>
                    {navLinks.map((link, index) =>

                        <Link key={index} to={link.path} >
                            <li className='text-green-800 px-5 '>{link.value}</li>
                        </Link>

                    )}
                </ul>

            )}
        </nav>
    );
};

export default AdminNavbar
