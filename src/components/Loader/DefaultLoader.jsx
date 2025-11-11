import React from 'react';

const DefaultLoader = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2  mb-24 mt-32">
      <div className="flex justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    </div>
  );
};

export default DefaultLoader;
