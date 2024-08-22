import axios from 'axios';
import React, { useState, useEffect } from 'react'
import axiosInstance from '../../config/axiosInstance';

const BookedData = () => {

    const [datas, setDatas] = useState([])
    const [bookingDatas, setBookingDatas] = useState([]);

    useEffect(() => {
        const currentManger = async () => {

            try {
                const res = await axiosInstance.get(`/managers/get-current-manager`)
                const resData = res.data;
                //console.log(resData);
                const turfs = resData.turfs;
                setDatas(turfs);
                //console.log(turfs);
            } catch (error) {
                console.log(error);
            }

        };
        currentManger();
    }, [])


    useEffect(() => {
        const bookings = async () => {
            try {
                const response = await axiosInstance.post(`/booking/get-bookings`, { ids: datas });
                const Data = await response.data;
                // console.log(Data);
                setBookingDatas(Data)

            } catch (error) {
                console.log(error);
            }
        }

        if (datas.length > 0) {
            bookings();
        }
    }, [datas])


    return (
        <div className='pt-24 p-6'>
            {bookingDatas && bookingDatas.map((data, index) => (

                <div key={index} className="max-w-4xl mx-auto text-lg bg-white border border-green-950 p-6 m-4 rounded-sm overflow-hidden flex flex-col sm:flex-row items-center justify-center">

                    <div className='me-6  '>
                        <h1>{data.turfName}</h1>
                    </div>
                    <div className='me-6'>
                        <h1>{data.category}</h1>
                    </div>

                    <div className='me-6'>
                        <span> {data.userEmail}</span>
                    </div>

                    <div className='me-6'>
                        <span> {data.date}</span>
                    </div>

                    <div className='me-6'>
                        <span> {data.startingTime}</span>
                    </div>

                    <div className='me-6'>
                        <span> {data.duration}</span>
                    </div>

                </div>

            ))}
        </div>
    )
}

export default BookedData
