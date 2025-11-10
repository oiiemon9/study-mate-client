import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
  baseURL: 'https://study-mate-server-theta.vercel.app',
});

const useAxiosHook = () => {
  return axiosInstance;
};

export default useAxiosHook;
