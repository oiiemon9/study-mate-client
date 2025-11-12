import React, { useEffect, useRef, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaChevronLeft } from 'react-icons/fa';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';

const RelatedPartners = ({ partnerSubject, partnerName }) => {
  const axiosInstance = useAxiosHook();
  const sliderPrevRef = useRef(null);
  const sliderNextRef = useRef(null);
  const [relatedPartners, setRelatedPartners] = useState([]);

  useEffect(() => {
    const relatedPartnerData = async () => {
      try {
        const result = await axiosInstance.get(
          `/related-partners?subject=${partnerSubject}&&skip=${partnerName}`
        );
        setRelatedPartners(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    relatedPartnerData();
  }, []);

  return (
    <div>
      {relatedPartners.length !== 0 && (
        <div className="mt-24">
          <h1 className="text-2xl font-bold">
            Related <span className="text-green-600">Partner</span>
          </h1>

          <div className="mt-6 relative">
            <div className="absolute top-0 bottom-0 left-4 my-0 z-10  flex items-center">
              <button
                ref={sliderPrevRef}
                className="border border-green-600 bg-white hover:bg-green-600  text-green-600 hover:text-white   rounded-full font-semibold shadow-md transition duration-300 cursor-pointer h-10 w-10 flex justify-center items-center text-xl "
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="absolute top-0 bottom-0 right-4 my-0 z-10  flex items-center">
              <button
                ref={sliderNextRef}
                className="border border-green-600 bg-white hover:bg-green-600  text-green-600 hover:text-white   rounded-full font-semibold shadow-md transition duration-300 cursor-pointer h-10 w-10 flex justify-center items-center text-xl rotate-180"
              >
                <FaChevronLeft />
              </button>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = sliderPrevRef.current;
                swiper.params.navigation.nextEl = sliderNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {relatedPartners.map((profile, i) => (
                <SwiperSlide>
                  <div
                    key={i}
                    className="border rounded-2xl border-gray-200 dark:border-gray-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="m-4 aspect-[1/1] relative">
                        <img
                          src={profile.profileImage}
                          alt=""
                          className="h-full w-full object-cover object-top rounded-2xl"
                        />
                        <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full">
                          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
                          <p className="text-xs text-green-600">Active</p>
                        </div>
                      </div>

                      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                        <div className=" flex flex-wrap items-center gap-1 justify-between">
                          <div>
                            <h4 className="text-sm text-gray-500/90 text-nowrap">
                              {profile.name}
                            </h4>
                          </div>
                          <div className="flex items-center">
                            <Rating
                              style={{ maxWidth: 80 }}
                              value={profile.rating}
                              readOnly
                            />
                            <p className="text-xs text-gray-500/90">
                              {' '}
                              {profile.rating}
                            </p>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold hover:text-green-600 transition-colors duration-300 w-fit">
                          {profile.subject}{' '}
                        </h3>
                        <h3 className="text-sm text-gray-500/90 flex justify-between gap-1">
                          <span>Experience:</span>{' '}
                          <span>{profile.experienceLevel}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 flex">
                      <Link className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white  py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full text-center">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedPartners;
