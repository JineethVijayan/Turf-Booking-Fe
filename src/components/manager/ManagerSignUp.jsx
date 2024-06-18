import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ManagerSignupschema = yup
    .object({
        name: yup.string().required('name required'),
        email: yup.string().email('must be a valid email').required('email required'),
        password: yup.string().min(6, 'atleast 6 characters').required('password required')
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
            const res = await axios.post('http://localhost:3001/api/v1/managers/signup',
                data,
                { withCredentials: true }
            );

            console.log(res.data.message);

            const resData = res.data.message;

            if (resData === "signed in !") {
                navigate("/manager/dashbord")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen '>

            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-96  bg-neutral-800 px-6 py-6'>

                <input type="text" {...register("name")} name="name" placeholder='Name' className='mb-2 ps-1 py-1.5' />
                {errors.name?.message}
                <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-2 ps-1 py-1.5' />
                {errors.email?.message}
                <input type="password"{...register("password")} name="password" placeholder='Password' className='mb-2 ps-1 py-1.5' />
                {errors.password?.message}
                <input type="submit" value="Signup" />

                <p>
                    Manager already exist{" "}
                    <Link to="/manager/signin" className="text-blue-500 underline">
                        Signin
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default ManagerSignUp
