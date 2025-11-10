import React from 'react';
import error404 from '../../assets/error404.png';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-10">
      <div className="space-y-5">
        <h1 className="text-center text-2xl font-bold text-cyan-500">Oops</h1>
        <h1 className="text-center text-2xl  text-cyan-500/50">
          Page Not Found
        </h1>
        <div className="flex justify-center">
          <div className="max-w-[500px] w-full">
            <img className="h-full w-full" src={error404} alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div>
            <Link
              to="/"
              className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white px-4  py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full text-center"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
