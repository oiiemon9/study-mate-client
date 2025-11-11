import React from 'react';
import error404 from '../../assets/error404.png';
import { Link } from 'react-router';
import studyMate from '../../assets/studyMate.png';
import { Helmet } from 'react-helmet-async';

const Error = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 mb-24 mt-32 ">
      <Helmet>
        <title>404 error | Study Mate</title>
        <meta
          name="description"
          content="Find your perfect study partner and achieve your goals together!"
        />
        <meta
          name="keywords"
          content="study partner, learning, education, connect"
        />
      </Helmet>
      <div className="space-y-5">
        <div>
          <h1 className="text-center text-2xl font-bold text-cyan-500">Oops</h1>
          <h1 className="text-center text-2xl  text-cyan-500/50">
            Page Not Found
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[500px]">
            <img className="h-full w-full" src={error404} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex w-fit">
            <Link
              to="/"
              className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white px-4  py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full text-center"
            >
              Go To Home
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-10">
            <div className="w-10 h-10">
              <img src={studyMate} alt="" />
            </div>
            <h1 className="text-xl font-bold  bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
              StudyMate
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
