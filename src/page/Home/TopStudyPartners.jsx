import React from 'react';
import PartnerCard from './PartnerCard';

const TopStudyPartners = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        <span className="text-green-600 underline decoration-4 underline-offset-4">
          Top
        </span>{' '}
        Study Partners
      </h2>
      <div className="grid grid-cols-4 mt-10 gap-14">
        {[1, 2, 3, 4].map((c) => (
          <PartnerCard></PartnerCard>
        ))}
      </div>
    </div>
  );
};

export default TopStudyPartners;
