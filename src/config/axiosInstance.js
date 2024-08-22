import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:` ${import.meta.env.VITE_API_URL}`, // Replace with your API's base URL
  withCredentials: true, // This ensures cookies are sent with requests
});

export default axiosInstance;