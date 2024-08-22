import axios from 'axios';

console.log(import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL:`https://turf-booking-fawn.vercel.app/api/v1`,
  withCredentials: true,
});

export default axiosInstance;