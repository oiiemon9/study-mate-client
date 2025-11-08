import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen  w-full">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
