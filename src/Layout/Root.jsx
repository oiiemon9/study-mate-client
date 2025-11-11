import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/ScrollTop/ScrollTop';

const Root = () => {
  return (
    <div>
      <ScrollTop></ScrollTop>
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
    </div>
  );
};

export default Root;
