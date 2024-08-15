import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManagersTable = () => {

    const [managers, setManagers] = useState([]);

    const [search, setSearch] = useState('');

    // console.log(search);

    useEffect(() => {

        const getAllManagers = async () => {

            try {

                const res = await axios.get("http://localhost:3001/api/v1/managers/get-managers",
                    {withCredentials:true}
                );

                const resData = await res.data

                console.log(resData);

                setManagers(resData)

            } catch (error) {
                console.log(error);
            }

        }
        getAllManagers();
    }, [])


    const remove =async(id)=>{
        
        const res = axios.delete(`http://localhost:3001/api/v1/managers/delete-managers/${id}`,
            { withCredentials: true }
        );
        const data = (await res).data;
        console.log(data);

        if (data === 'manager deleted') {
            window.location.reload();
        }


    }


    return (

        <div>
            <div className='pt-28 flex justify-center items-center '>
                <form className='w-full flex justify-center' >
                    <input onChange={(e) => setSearch(e.target.value)} type="search" name="search" placeholder='Search Managers' className='w-7/12 px-6 py-2 border rounded border-solid' />
                </form>
            </div>
            <div className='pt-6 flex justify-center'>



                <table className="mb-12 table-auto px-6 ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Turfs</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {managers && managers.filter((manager) => {
                            return search.toLowerCase() === '' ? manager : manager.name.toLowerCase().includes(search);
                        }).map((manager) => (
                            <tr key={manager._id}>
                                <td className="border px-4 py-2">{manager.name}</td>
                                <td className="border px-4 py-2">{manager.email}</td>
                                <td className="border px-4 py-2">{manager.role}</td>
                                <td className="border px-4 py-2">{manager.role}</td>
                                <td className="border px-4 py-2">
                                    <div className='flex flex-row'>
                                        <Link to={`/admin/managers/update/${manager._id}`} className='me-5 items-center  px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>Update</Link>
                                        <Link onClick={(e)=> remove(manager._id)} className='items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>Delete</Link>
                                    </div>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagersTable
