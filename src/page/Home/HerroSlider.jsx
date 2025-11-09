import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const HerroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="bg-[url('https://i.ibb.co.com/5Ww60yJz/2149285424.jpg')] bg-cover bg-no-repeat h-full  ">
          <div className="h-full bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0)_51%)]">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col h-full justify-center text-white ">
              <div className="ms-20 space-y-6">
                <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                  Find Your Study Buddy
                </p>
                <h1 className="text-5xl font-extrabold drop-shadow-lg">
                  Study Smarter,{' '}
                  <span className="text-green-400">Together.</span>
                </h1>

                <p className="max-w-xl text-lg  text-gray-100/90 drop-shadow-md">
                  Connect with passionate learners who share your study goals,
                  match your schedule, and motivate you to achieve more —
                  together.
                </p>

                <div>
                  <button className="mt-4 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer">
                    Find a Study Mate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co.com/1JbXVrv8/2884.jpg')] bg-cover bg-no-repeat h-full  ">
          <div className="h-full bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0)_51%)]">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col h-full justify-center text-white ">
              <div className="ms-20 space-y-6">
                <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                  Find Your Study Buddy
                </p>
                <h1 className="text-5xl font-extrabold drop-shadow-lg">
                  Turn Study Time into
                  <span className="text-green-400">Team Time.</span>
                </h1>

                <p className="max-w-xl text-lg  text-gray-100/90 drop-shadow-md">
                  Find learners who share your goals, study habits, and dream
                  big just like you. Build connections that make studying fun
                  and productive.
                </p>

                <div>
                  <button className="mt-4 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer">
                    Create Your Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co.com/CKR6ZTyS/pexels-artempodrez-4492126.jpg')] bg-cover bg-no-repeat h-full  ">
          <div className="h-full bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0)_51%)]">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col h-full justify-center text-white ">
              <div className="ms-20 space-y-6">
                <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                  Find Your Study Buddy
                </p>
                <h1 className="text-5xl font-extrabold drop-shadow-lg">
                  Study Smarter,{' '}
                  <span className="text-green-400">Great Company</span>
                </h1>

                <p className="max-w-xl text-lg  text-gray-100/90 drop-shadow-md">
                  Connect with dedicated students who align with your subjects,
                  time, and learning style — and grow together through shared
                  goals.
                </p>

                <div>
                  <button className="mt-4 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer">
                    Find a Study Mate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HerroSlider;
