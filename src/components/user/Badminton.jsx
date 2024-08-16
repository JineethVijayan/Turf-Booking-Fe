import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';


const Badminton = () => {

    const [turfs, setTurfs] = useState([]);

    useEffect(() => {

        const BadmintonTurf = async () => {

            const category = 'Badminton'

            try {

                const res = await axios.get(`http://localhost:3001/api/v1/turfs/get-turf/category/${category}`);
                const resData = await res.data;
                console.log(resData);
                setTurfs(resData);

            } catch (error) {
                console.log(error);
            }

        };
        BadmintonTurf();
    }, []);


  return (
    <div className='bg-stone-50 m-10 rounded-3xl '>

    <div className='  ps-4 pt-2 pb-6'>
        <h1 className='text-3xl  text-[#008000]'>Badminton</h1>

    </div>

    <div className=' ps-4 grid grid-cols-3 grid-flow-row gap-4 auto-rows-auto '>

        {turfs && turfs.map((turf) =>
            <Cards key={turf._id}
                turfId={turf._id}
                image={turf.image}
                title={turf.title}
                description={turf.description}
                price={turf.price} />)}



    </div>
</div>
  )
}

export default Badminton