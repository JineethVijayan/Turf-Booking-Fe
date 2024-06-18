import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';


const userSigninSchema = yup
  .object({
    email: yup.string().email("must be a valid email").required("please enter your email"),
    password: yup.string().required('enter your password')
  })
  .required()

const UserSignIn = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSigninSchema) });

  const OnSubmit = async (data) => {

    await axios.post("http://localhost:3001/api/v1/user/signin", data);
    console.log(data);

  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(OnSubmit)} className='flex flex-col   bg-neutral-800 px-6 py-6'>
        <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-2 ps-1 py-1.5' />
        {errors.email?.message}
        <input type="password"  {...register("password")} name="password" placeholder='password' className='mb-2 ps-1 py-1.5' />
        {errors.password?.message}
        <input type="submit" value="Login" className='bg-blue-800 hover:bg-blue-300' />

        <p>
          User not created yet{" "}
          <Link to="/user/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>

      </form>
    </div>
  )
}

export default UserSignIn;
