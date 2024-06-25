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
        <div className="flex justify-between p-4 text-2xl fixed  w-screen">
            <Link to={'/'}><h1 className=''>Logo</h1></Link>
            <ul className='flex items-center gap-x-5 '>
                {navLinks.map((link, index) =>
                    <Link key={index} to={link.path} >
                        <li className=' text-green-800 px-5 '>{link.value}</li>
                    </Link>
                )}
            </ul>


        </div>
    )
}

export default Navbar
