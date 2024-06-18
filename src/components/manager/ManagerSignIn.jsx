import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';

const managerSigninSchema = yup
    .object({
        email: yup.string().email().required('Email required'),
        password: yup.string().required('password required')
    })
    .required()


const ManagerSignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(managerSigninSchema) })

    const onSubmit = async (data) => {

        await axios.post('http://localhost:3001/api/v1/managers/signin')
        console.log(data)

    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-96  bg-neutral-800 px-6 py-6'>

                <input type="email"  {...register('email')} name="email" placeholder='Email' className='mb-2 ps-1 py-1.5' />
                {errors.email?.message}
                <input type="password" {...register('password')} name="password" placeholder='Password' className='mb-2 ps-1 py-1.5' />
                {errors.password?.message}
                <input type="submit" value="Login" />

                <p>
                    Manager not created yet{" "}
                    <Link to="/manager/signup" className="text-blue-500 underline">
                        Signup
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default ManagerSignIn
