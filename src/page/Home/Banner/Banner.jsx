import React from 'react';
import './banner.css';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <div className="w-full h-96 md:h-[700px] rounded-2xl overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co.com/fVpJtv8K/download-33.png"
          alt=""
        />
        <div className="absolute top-0 right-5 md:right-32 p-3 md:p-6 bg-white rounded-b-3xl max-w-[200px] md:max-w-[400px]">
          <div className="custom-shape">
            <p className="text-xs md:text-base text-green-600 font-semibold">
              2500+ partner
            </p>
            <h2 className="md:text-3xl font-bold">
              Find your perfect study partner .
            </h2>
            <div className="flex">
              <Link
                to="/find-partners"
                className=" mt-3 px-4 py-2 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white rounded-xl font-semibold transition duration-300 cursor-pointer w-full md:w-fit text-xs md:text-base text-center"
              >
                Find Partners
              </Link>
            </div>
            {/* <button class=" border rounded-md">Shop Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
