import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'

const schema = yup
    .object({
        managerEmail: yup.string().email().required('required'),
        title: yup.string().required('required'),
        description: yup.string().required('required'),
        price: yup.number().positive().required('required'),
        image: yup.mixed().required('required')
    })
    .required()



const AddTurf = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {

        const requestBody = {
            title: data.title,
            description: data.description,
            price: data.price,
            managerEmail: data.managerEmail,
            image: data.image[0], // assuming data.image is a File object
        };

        try {

            const res = await axios.post('http://localhost:3001/api/v1/turfs/add-turfs',
                requestBody,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            const resData = res.data;
            console.log(resData);

        } catch (error) {
            console.log(error);
        }


    }
    // const onSubmit =  (data) =>console.log(data);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center  ">
                    <p></p>
                </div>
                <div className='w-96  px-6 py-6 flex items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                        <input type="email" name='email' {...register('managerEmail')} placeholder='Registerd email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.managerEmail?.message}
                        <input type="text" name="title" {...register('title')} placeholder='Title' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.title?.message}
                        <textarea name="description" {...register('description')} placeholder='Description' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
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
