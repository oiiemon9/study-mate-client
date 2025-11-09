import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import React from 'react';

const PartnerCard = () => {
  return (
    <div className="border rounded-2xl border-gray-200">
      <div className="m-4 aspect-[1/1] relative">
        <img
          src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
          alt=""
          className="h-full w-full object-cover rounded-2xl"
        />
        <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full">
          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
          <p className="text-xs text-green-800">Active</p>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <div className=" flex items-center gap-1 justify-between">
          <div>
            <h4 className="text-sm text-gray-500/90">Emon Mollah</h4>
          </div>
          <div>
            <Rating style={{ maxWidth: 80 }} value={3} readOnly />
          </div>
        </div>
        <h3 className="text-lg font-semibold hover:text-green-600 transition-colors duration-300">
          Programming{' '}
        </h3>
        <h3 className="text-sm text-gray-500/90 flex justify-between gap-1">
          <span>Experience:</span> <span>Intermediate</span>
        </h3>
        <div>
          <button className="mt-4 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white text-sm px-3 py-1  md:py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
