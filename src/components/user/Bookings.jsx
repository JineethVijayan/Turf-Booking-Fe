import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import axiosInstance from '../../config/axiosInstance.js';




const Bookings = () => {
  //
  const [user, setUser] = useState(null);

  const [cart, setCart] = useState([]);

  const [cartTurfs, setCartTurfs] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axiosInstance.get("/user/get-current-user");
        const resData = await res.data;
        // console.log(resData);
        setUser(resData._id);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
  }, []);

  ////

  useEffect(() => {

    const getCart = async () => {
      if (user) {

        try {
          const res = await axiosInstance.get(`/carts/get-cartby-userId/${user}`);
          const resData = await res.data;
          const cartTurfs = resData.turfIds;
          setCart(cartTurfs);
        } catch (error) {
          console.log(error);
        }
      };

    }

    getCart();
  }, [user]);

  ///

  useEffect(() => {
    const turfs = async () => {
      try {
        const response = await axiosInstance.post(`/turfs/get-turfsByIds`, { ids: cart },
          { withCredentials: true }
        );
        const turfsData = response.data;
        // console.log(turfsData);
        setCartTurfs(turfsData);

      } catch (error) {
        console.log(error);
      }
    }

    if (cart.length > 0) {
      turfs();
    }
  }, [cart])





  return (
    <div className='pt-24 bg-stone-50 rounded-3xl  '>


      {
        cartTurfs && cartTurfs.map((turf, index) =>
          <CartCard key={index} userid={user} turf={turf} turfid={turf._id} title={turf.title} description={turf.description} price={turf.price} image={turf.image} />
        )
      }


    </div>
  )
}

export default Bookings
