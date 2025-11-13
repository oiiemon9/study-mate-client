import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import React from 'react';
import { Link } from 'react-router';
import { hover, motion } from 'framer-motion';

const PartnerCard = ({ profile }) => {
  const {
    profileImage,
    name,
    subject,
    experienceLevel,
    rating,
    studyMode,
    _id,
  } = profile;
  return (
    <motion.div
      whileHover="hover"
      className="border rounded-2xl border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="m-4 aspect-[1/1] relative overflow-hidden rounded-2xl">
          <motion.img
            variants={{
              initial: { scale: 1, rotate: 0 },
              hover: { scale: 1.05, rotate: 1 },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={profileImage}
            alt=""
            className="h-full w-full object-cover object-top rounded-2xl"
          />
          <div
            className={`absolute top-3 right-3 ${
              studyMode === 'Online' ? 'bg-black' : 'bg-gray-200'
            } backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full`}
          >
            <div
              className={` ${
                studyMode === 'Online' ? 'bg-green-600' : 'bg-gray-500/90'
              } h-2 w-2 rounded-full`}
            ></div>
            <p
              className={`text-xs   ${
                studyMode === 'Online' ? 'text-green-600' : 'text-gray-500/90'
              }`}
            >
              {studyMode === 'Online' ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <div className=" flex flex-wrap items-center gap-1 justify-between">
            <div>
              <h4 className="text-sm text-gray-500/90 text-nowrap">{name}</h4>
            </div>
            <div className="flex items-center">
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
              <p className="text-xs text-gray-500/90"> ({rating})</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold hover:text-green-600 transition-colors duration-300 w-fit">
            {subject}{' '}
          </h3>
          <h3 className="text-sm text-gray-500/90 flex justify-between gap-1">
            <span>Experience:</span> <span>{experienceLevel}</span>
          </h3>
        </div>
      </div>
      <div className="p-4 flex">
        <Link
          to={`/partner/${_id}`}
          className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white  py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full text-center"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
