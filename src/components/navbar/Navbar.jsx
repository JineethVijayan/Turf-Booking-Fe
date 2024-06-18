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
        <div className='flex justify-between p-4 text-2xl shadow-lg '>
            <h1>Logo</h1>
            <ul className='flex items-center gap-x-5'>
                {navLinks.map((link, index) => 
                    <Link key={index} to={link.path} >
                        <li>{link.value}</li>
                    </Link>
                )}
            </ul>

          
        </div>
    )
}

export default Navbar
