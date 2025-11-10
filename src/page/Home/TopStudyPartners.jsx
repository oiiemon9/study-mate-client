import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';

const TopStudyPartners = () => {
  const axiosInstance = useAxiosHook();
  const [topPartners, setTopPartners] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const topPartner = async () => {
      setLoader(true);
      try {
        const res = await axiosInstance.get('top-study-partners');
        setTopPartners(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
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
      {loader ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border rounded-2xl border-gray-200 flex flex-col justify-between animate-pulse"
            >
              {/* Image part */}
              <div className="m-4 aspect-[1/1] relative">
                <div className="skeleton h-full w-full rounded-2xl"></div>
                <div className="absolute top-3 right-3 bg-white/40 backdrop-blur-lg px-2 py-1 rounded-full">
                  <div className="skeleton h-3 w-12 rounded-full"></div>
                </div>
              </div>

              {/* Text content */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="skeleton h-3 w-24 rounded-full"></div>
                  <div className="skeleton h-3 w-20 rounded-full"></div>
                </div>

                <div className="skeleton h-4 w-36 rounded-full"></div>

                <div className="flex items-center justify-between">
                  <div className="skeleton h-3 w-20 rounded-full"></div>
                  <div className="skeleton h-3 w-16 rounded-full"></div>
                </div>
              </div>

              {/* Button */}
              <div className="p-4">
                <div className="skeleton h-10 w-full rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
          {topPartners.map((profile) => (
            <PartnerCard key={profile._id} profile={profile}></PartnerCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopStudyPartners;
