import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';


const managerSigninSchema = yup
  .object({
    email: yup.string().email().required('Email required'),
    password: yup.string().required('password required')
  })
  .required()


const ManagerSignIn = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(managerSigninSchema) })

  const onSubmit = async (data) => {

    try {
      const res = await axiosInstance.post('/managers/signin', data)
      const resData = await res.data;
      // console.log(resData);
      // console.log(resData.role);
      // const id = resData.manager._id
      // console.log(id);
      if (resData.role === 'admin') {
        alert("Successfully loged in ")
        navigate(`/admin/dashbord`)
      } else if (resData.role === 'manager') {
        alert("Successfully loged in ")
        navigate(`/manager/my-turf`)
      } else if (resData.role === 'user') {
        alert("Your not allowed ,Please contact Admin");
      }

    } catch (error) {
      console.log(error);
    }


  }

  return (

    /////

    <div className='flex justify-center items-center h-screen pt-16'>

      <div className='md:flex  shadow-sm shadow-slate-800 p-3'>
        <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center md:flex hidden ">



        </div>

        <div className='w-96  px-6 py-6 flex items-center '>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  w-full  '>
            <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.email?.message}
            <input type="password"  {...register("password")} name="password" placeholder='password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.password?.message}
            <input type="submit" value="Login" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

            <p className=' ms-16 mt-4'>
              Manager not created yet ?{" "}
              <Link to="/manager/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>


    ////////

  )
}

export default ManagerSignIn
