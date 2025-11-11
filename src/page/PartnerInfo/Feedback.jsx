import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const Feedback = ({ partnerRating }) => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row gap-5">
        <div className="text-center bg-green-100/50 dark:bg-base-200 border border-gray-200 dark:border-gray-700 aspect-[1/1] max-w-44 w-full rounded-2xl flex flex-col justify-center items-center space-y-1">
          <h2 className="text-4xl font-bold text-green-600">{partnerRating}</h2>
          <div>
            <Rating style={{ maxWidth: 80 }} value={partnerRating} readOnly />
          </div>
          <p className="text-gray-500/90 text-sm">Rating</p>
        </div>
        <div className=" bg-green-100/50 dark:bg-base-200 border border-gray-200 dark:border-gray-700 w-full rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center gap-5">
            {' '}
            <progress
              className="progress w-full [&::-webkit-progress-value]:bg-green-600 bg-green-200"
              value={70}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-5 min-w-44">
              <div>
                <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              </div>
              <p className="text-green-600">70%</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {' '}
            <progress
              className="progress w-full [&::-webkit-progress-value]:bg-green-600 bg-green-200"
              value={15}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-5 min-w-44">
              <div>
                <Rating style={{ maxWidth: 120 }} value={4} readOnly />
              </div>
              <p className="text-green-600">15%</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {' '}
            <progress
              className="progress w-full [&::-webkit-progress-value]:bg-green-600 bg-green-200"
              value={20}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-5 min-w-44">
              <div>
                <Rating style={{ maxWidth: 120 }} value={3} readOnly />
              </div>
              <p className="text-green-600">20%</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {' '}
            <progress
              className="progress w-full [&::-webkit-progress-value]:bg-green-600 bg-green-200"
              value={3}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-5 min-w-44">
              <div>
                <Rating style={{ maxWidth: 120 }} value={2} readOnly />
              </div>
              <p className="text-green-600">3%</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {' '}
            <progress
              className="progress w-full [&::-webkit-progress-value]:bg-green-600 bg-green-200"
              value={2}
              max="100"
            ></progress>
            <div className="flex items-center justify-between gap-5 min-w-44">
              <div>
                <Rating style={{ maxWidth: 120 }} value={1} readOnly />
              </div>
              <p className="text-green-600">2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
