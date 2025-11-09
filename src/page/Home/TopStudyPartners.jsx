import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';

const TopStudyPartners = () => {
  const axiosInstance = useAxiosHook();
  const [topPartners, setTopPartners] = useState([]);
  useEffect(() => {
    const topPartner = async () => {
      try {
        const res = await axiosInstance.get('top-study-partners');
        setTopPartners(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    topPartner();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        <span className="text-green-600 underline decoration-4 underline-offset-4">
          Top
        </span>{' '}
        Study Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
        {topPartners.map((profile) => (
          <PartnerCard key={profile._id} profile={profile}></PartnerCard>
        ))}
      </div>
    </div>
  );
};

export default TopStudyPartners;
