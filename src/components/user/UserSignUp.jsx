import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance.js';

const schema = yup
    .object({
        firstName: yup.string().required('please enter your first name'),
        lastName: yup.string().required('please enter your last name'),
        email: yup.string().email().required('please enter your email'),
        password: yup.string()
            .min(4, 'Password must be at least 4 characters long.')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.').required(),
            confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
    })
    .required()




const UserSignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {

            const res = await axiosInstance.post("/user/signup",data);

            const resData = await res.data;



            if (resData === "signed up successfully") {
                alert('Signed up successfully! Please log in.');
                navigate("/user/signin");
            }


        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div className="flex justify-center items-center h-screen pt-16 ">

            <div className='md:flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center md:flex hidden ">
                    
                  
                  
                </div>

                <div className='w-96  px-6 py-6  items-center '>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full '>
                        <input name='fname' type="text" {...register("firstName")} placeholder='First Name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.firstName?.message}
                        <input name='lname' type="text" {...register("lastName")} placeholder='Last Name' className='mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800' />
                        {errors.lastName?.message}
                        <input name='email' type="text" {...register("email")} placeholder='Email' className='mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800' />
                        {errors.email?.message}
                        <input name='password' type="text" {...register("password")} placeholder='Password' className='mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800' />
                        {errors.password?.message}
                        <input name='confirmPassword' type="password" {...register("confirmPassword")} placeholder='Confirm Password' className='mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800' />
                        {errors.confirmPassword?.message}
                        <input type="submit" value="Signup" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                        <p className=' ms-16 mt-4'>
                            User already exist ?{" "}
                            <Link to="/user/signin" className="text-blue-500 underline ">
                                Signin
                            </Link>
                        </p>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default UserSignUp;
