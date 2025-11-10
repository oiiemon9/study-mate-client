import React, { use } from 'react';
import './profile.css';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';

const Profile = () => {
  const { loginUser } = use(AuthContext);
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-10">
      <div className="flex justify-center">
        <div className="border border-gray-200 max-w-lg w-full rounded-2xl overflow-hidden">
          <div className=" bg-[#0b1221] h-24 clip-curve"></div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-24 h-24 overflow-hidden -mt-12 rounded-full bg-white z-10 shadow-md">
              <img
                className="h-full w-full rounded-full  object-cover p-2"
                src={loginUser.photoURL}
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-center space-y-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {loginUser?.displayName}
              </h1>
              <p className="text-gray-500 text-sm">{loginUser?.email}</p>
            </div>

            <div className="w-1/2 border-t border-gray-200 my-4"></div>

            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">12</p>
                <p className="text-gray-500 text-xs">Partners</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">4</p>
                <p className="text-gray-500 text-xs">Requests</p>
              </div>
            </div>

            {/* Button */}
            <Link className="border mb-6 px-6 py-2 border-green-600 hover:bg-green-600  text-green-600 hover:text-white  rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer  text-center">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
