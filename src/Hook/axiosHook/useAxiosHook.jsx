import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
  baseURL: 'https://study-mate-server-theta.vercel.app',
  // baseURL: 'http://localhost:3000',
});

const useAxiosHook = () => {
  return axiosInstance;
};

export default useAxiosHook;
