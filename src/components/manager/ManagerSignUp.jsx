import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';


const ManagerSignupschema = yup
    .object({
        name: yup.string().required('name required'),
        email: yup.string().email('must be a valid email').required('email required'),
        password: yup.string().min(6, 'atleast 6 characters').required('password required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
    })
    .required()


const ManagerSignUp = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ManagerSignupschema) });

    const onSubmit = async (data) => {
        try {
            const res = await axiosInstance.post('/managers/signup',data);

            console.log(res.data.message);

            const resData = res.data.message;

            if (resData === "signed in !") {
                alert('Signed up successfully! Please log in.');
                navigate("/manager/signin")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen pt-16'>
            <div className='md:flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center md:flex hidden ">

                  

                </div>

                <div className='w-96  px-6 py-6 flex items-center '>
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-full'>

                        <input type="text" {...register("name")} name="name" placeholder='Name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.name?.message}
                        <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.email?.message}
                        <input type="password"{...register("password")} name="password" placeholder='Password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.password?.message}
                        <input name='confirmPassword' type="password" {...register("confirmPassword")} placeholder='Confirm Password' className='mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800' />
                        {errors.confirmPassword?.message}
                        <input type="submit" value="Signup" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

                        <p className='ms-16 mt-4'>
                            Manager already exist{" "}
                            <Link to="/manager/signin" className="text-blue-500 underline">
                                Signin
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManagerSignUp
