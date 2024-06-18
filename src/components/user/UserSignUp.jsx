import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const schema = yup
    .object({
        firstName: yup.string().required('please enter your first name'),
        lastName: yup.string().required('please enter your last name'),
        email: yup.string().email().required('please enter your email'),
        password: yup.string()
            .min(4, 'Password must be at least 4 characters long.')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.').required()
    })
    .required()




const UserSignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        const res = await axios.post(
            "http://localhost:3001/api/v1/user/signup",
            data,
            {
                withCredentials: true
            }
        );

        const resData = await res.data;

        if (resData === "signed up successfully") {
            navigate("/user/dashbord")
        }

    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96  bg-neutral-800 px-6 py-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col shadow-md '>
                    <input name='fname' type="text" {...register("firstName")} placeholder='First Name' className='mb-2 ps-1 py-1.5' />
                    {errors.firstName?.message}
                    <input name='lname' type="text" {...register("lastName")} placeholder='Last Name' className='mb-2 ps-1 py-1.5' />
                    {errors.lastName?.message}
                    <input name='email' type="text" {...register("email")} placeholder='Email' className='mb-2 ps-1 py-1.5' />
                    {errors.email?.message}
                    <input name='password' type="text" {...register("password")} placeholder='Password' className='mb-2 ps-1 py-1.5' />
                    {errors.password?.message}
                    <input type="submit" value="Signup" className='px-2 py-1.5 bg-zinc-400 text-cyan-400 hover:bg-cyan-200 hover:text-black' />
                    <p>
                        User already exist{" "}
                        <Link to="/user/signin" className="text-blue-500 underline">
                            Signin
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default UserSignUp;
