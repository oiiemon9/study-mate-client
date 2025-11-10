import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const SuccessStories = () => {
  return (
    <div className=" my-24 py-24 bg-gray-100/50">
      <div className="max-w-[1440px] mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          <span className="text-green-600 underline decoration-4 underline-offset-4">
            Success
          </span>{' '}
          Stories
        </h2>
        <div className="rounded-3xl overflow-hidden">
          <Marquee
            gradient
            gradientColor="#f3f4f6"
            gradientWidth={100}
            pauseOnHover
          >
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  "I’m very happy to be connected with this website. It has
                  helped me a lot to achieve the dreams and goals I had. When
                  people are worried about something. I was also worried about
                  my dreams, but this website helped me overcome that worry and
                  achieve them."
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/TDzhY2gp/download-26.png"
                  />
                </div>
                <div>
                  <h4>Emon Mollah</h4>
                  <h4 className="text-xs text-gray-500/90">BBA | KAUC</h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " Before joining this platform, I used to study alone and
                  often felt demotivated. But after finding my study partner, I
                  started enjoying every session. We help each other stay
                  consistent and focused. "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/8D7JLLWN/download-27.png"
                  />
                </div>
                <div>
                  <h4>Sarah Khan</h4>
                  <h4 className="text-xs text-gray-500/90">
                    Computer Science | DIU
                  </h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " I met an amazing study partner here who shares the same
                  dream of becoming a software engineer. We built a study
                  schedule together and pushed each other to stay on track. "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/HWsTmwc/download-28.png"
                  />
                </div>
                <div>
                  <h4>Rafiul Islam</h4>
                  <h4 className="text-xs text-gray-500/90">
                    CSE Student | BRAC University
                  </h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " This platform helped me find a group of students preparing
                  for IELTS. We practice speaking and share tips every day. It
                  feels like a real study community. "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/XZfPdVFQ/download-29.png"
                  />
                </div>
                <div>
                  <h4>Sumaiya Noor</h4>
                  <h4 className="text-xs text-gray-500/90">
                    IELTS Candidate | Chittagong
                  </h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " I used to struggle with Math, but my study partner helped me
                  understand complex topics easily. Now I actually enjoy solving
                  problems. This site changed my mindset! "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/YBbP677x/download-30.png"
                  />
                </div>
                <div>
                  <h4>Tanvir Hasan</h4>
                  <h4 className="text-xs text-gray-500/90">
                    HSC Student | Rajshahi College
                  </h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " I joined a study group for Physics here. Everyone was super
                  supportive. We share notes, quiz each other, and motivate one
                  another before exams. "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/6c9CF574/download-31.png"
                  />
                </div>
                <div>
                  <h4>Shila Akter</h4>
                  <h4 className="text-xs text-gray-500/90">
                    Science Student | NDC
                  </h4>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col justify-between bg-white w-[300px] h-[350px] mr-5">
              <div>
                <p className="p-4 text-gray-500/90 italic">
                  " My partner and I set weekly goals and track our progress
                  using this platform. It keeps us accountable and consistent.
                  We even celebrated when we both passed our midterms! "
                </p>
              </div>
              <div className="p-4 flex items-center border-t border-gray-200 bg-gray-100/50 w-full gap-2">
                <div className="w-12 h-12">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="https://i.ibb.co.com/Q2SQq17/download-32.png"
                  />
                </div>
                <div>
                  <h4>Ratul Chowdhury</h4>
                  <h4 className="text-xs text-gray-500/90">
                    Economics | North South University
                  </h4>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="flex justify-evenly items-center flex-wrap mt-20 gap-20">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Partner Count</h2>
            <h1 className="text-6xl font-bold text-green-600 text-shadow-lg">
              2,000+
            </h1>
            <p className="text-gray-500/90">this month</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Happy User</h2>
            <h1 className="text-6xl font-bold text-green-600 text-shadow-lg">
              85 %
            </h1>
            <p className="text-gray-500/90">this year</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Visited User</h2>
            <h1 className="text-6xl font-bold text-green-600 text-shadow-lg">
              160 K
            </h1>
            <p className="text-gray-500/90">this year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
