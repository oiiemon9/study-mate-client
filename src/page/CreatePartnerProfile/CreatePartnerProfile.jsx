import React, { use } from 'react';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';

const CreatePartnerProfile = () => {
  const { loginUser } = use(AuthContext);
  return (
    <div className="max-w-[1440px] mx-auto px-2">
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 border border-gray-300">
          <div className="text-center mb-8">
            <h1 className="text-center text-2xl font-bold">
              Create <span className="text-green-600">A Products</span>
            </h1>
            <p className="text-sm text-gray-600">
              Build your profile and find your perfect study partner!
            </p>
          </div>

          <form>
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 grid grid-cols-2 gap-5">
              <div>
                <label className="inline-block text-sm font-medium">Name</label>

                <div className="mt-2 space-y-3">
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="Your Name"
                    name="name"
                    defaultValue={loginUser.displayName}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Email
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    type="email"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="Your Email"
                    name="email"
                    defaultValue={loginUser.email}
                    required
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Subject
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="e.g Mathematics"
                    name="subject"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Profile Image Url
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="https://..."
                    name="profile-image"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Study Mode
                </label>

                <div className="flex flex-wrap gap-2">
                  <div className="mt-2">
                    <label className="label">
                      <input
                        type="radio"
                        name="radio-4"
                        value="Online"
                        className="radio radio-primary"
                        defaultChecked
                      />
                      Online
                    </label>
                  </div>
                  <div className="mt-2">
                    <label className="label">
                      <input
                        type="radio"
                        name="radio-4"
                        value="Offline"
                        className="radio radio-primary"
                      />
                      Offline
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Availability Time
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="e.g Evening 6–9 PM"
                    name="time"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Location
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
                    placeholder="dhaka, bangladesh"
                    name="location"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="inline-block text-sm font-medium">
                  Experience Level
                </label>

                <div className="mt-2">
                  <select
                    className={`py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600 `}
                  >
                    <option className="text-black" value="Beginner">
                      Beginner
                    </option>
                    <option className="text-black" value="Intermediate">
                      Intermediate
                    </option>
                    <option className="text-black" value="Expert">
                      Expert
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
