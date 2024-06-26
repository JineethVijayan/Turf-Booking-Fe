import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminTurfCard from './AdminTurfCard';

const AdminTurfs = () => {

    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        const getAllTurfs = async () => {
            try {

                const res = axios.get('http://localhost:3001/api/v1/turfs/get-turfs');

                const data = (await res).data;

                 console.log(data);
                setTurfs(data);

            } catch (error) {
                console.log(error);
            }
        };
        getAllTurfs();
    }, []);

    return (
        <div>
            <div className='pt-24 grid grid-cols-3 
                     grid-flow-row gap-4 auto-rows-auto'>
                {turfs && turfs.map((turf) =>
                    <AdminTurfCard
                        key={turf._id}
                        id={turf._id}
                        image={turf.image}
                        title={turf.title}
                        description={turf.description}
                        price={turf.price} />)}

            </div>
        </div>
    )
}

export default AdminTurfs
