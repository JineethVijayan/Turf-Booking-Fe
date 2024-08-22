import React, { useState,useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import MultipleSelect from './MultipleSelect'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../config/axiosInstance.js'


const schema = yup
    .object({
        managerEmail: yup.string().email(),
        title: yup.string().required('required'),
        category: yup.array().of(yup.string()).required('required'),
        description: yup.string().required('required'),
        price: yup.number().positive().required('required'),
        image: yup.mixed().required('required')
    })
    .required()



const AddTurf = () => {

const navigate =useNavigate();

const [manager,setManager] =useState([]);

    ///////

    useEffect(() => {
        const currentManger = async () => {
    
          try {
            const res = await axiosInstance.get(`/managers/get-current-manager`,
              { withCredentials: true }
            )
            const resData = res.data;
            //console.log(resData);
          
            setManager(resData);
            //console.log(turfs);
          } catch (error) {
            console.log(error);
          }
    
        };
        currentManger();
      }, [])


    ////

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('managerEmail', manager.email); // Set email directly from the state
        formData.append('image', data.image[0]); // Append the first file from the file input

        try {

            const res = await axiosInstance.post('/turfs/add-turfs',formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            const resData = await res.data;
           // console.log(resData);
           if(resData.message ==='created'){
            alert('new turf created');
            navigate('/manager/my-turf');
           }

        } catch (error) {
            console.log(error);
        }


    }
    // const onSubmit =  (data) =>console.log(data);

    return (
        <div className='flex justify-center items-center h-screen pt-16'>
            <div className='md:flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center md:flex hidden ">
                   


                </div>


                <div className='w-96  px-6 py-6 flex items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                        <input type="email" name='email'  value={manager.email || ''} disabled {...register('managerEmail')} placeholder='Registerd email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.managerEmail?.message}
                        <input type="text" name="title" {...register('title')} placeholder='Title' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.title?.message}



                        <MultipleSelect category='category' register={register} error={errors.category} />

                        <textarea name="description" {...register('description')} placeholder='Description' className='mt-4 mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.description?.message}
                        <input type="text" name="price" {...register('price')} placeholder='Price' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.price?.message}
                        <input type="file" name="image" {...register('image')} placeholder='Image' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.image?.message}
                        <input type="submit" value="Submit" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTurf
