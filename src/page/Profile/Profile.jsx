import React, { use, useRef, useState } from 'react';
import './profile.css';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import { Helmet } from 'react-helmet-async';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Context/Firebase/firebase.init';

const Profile = () => {
  const { loginUser, setLoginUser } = use(AuthContext);
  const [formError, setFormError] = useState('');
  const modalRef = useRef();

  const handelProfileEdit = () => {
    modalRef.current.showModal();
  };
  const modalClose = () => {
    modalRef.current.close();
    setFormError('');
  };

  const handelEdit = async (e) => {
    e.preventDefault();
    setFormError('');
    const form = e.target;
    const displayName = form.name.value.trim();
    const photoURL = form.photo.value.trim();

    if (
      displayName === loginUser.displayName &&
      photoURL === loginUser.photoURL
    ) {
      setFormError('Please change name or photo Url than click to edit .');
      return;
    }

    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setLoginUser({
          ...loginUser,
          displayName: displayName,
          photoURL: photoURL,
        });
        toast.success('Profile edit successful');
        modalRef.current.close();
        setFormError('');
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="max-w-[1440px] mx-auto px-2  mb-24 mt-32">
      <Helmet>
        <title>{`${loginUser.displayName}`} | Study Mate</title>
        <meta
          name="description"
          content="Find your perfect study partner and achieve your goals together!"
        />
        <meta
          name="keywords"
          content="study partner, learning, education, connect"
        />
      </Helmet>
      <div className="flex justify-center">
        <div className="border border-gray-200 dark:border-gray-700 max-w-lg w-full rounded-2xl overflow-hidden">
          <div className=" bg-[#0b1221] h-24 clip-curve"></div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-24 h-24 overflow-hidden -mt-12 rounded-full bg-white z-10 shadow-md">
              <img
                className="h-full w-full rounded-full  object-cover p-2"
                src={loginUser.photoURL}
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-center space-y-1">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                {loginUser?.displayName}
              </h1>
              <p className="text-gray-500 text-sm">{loginUser?.email}</p>
            </div>

            <div className="w-1/2 border-t border-gray-200 dark:border-gray-500 my-4"></div>

            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  12
                </p>
                <p className="text-gray-500 text-xs">Partners</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800 dark:text-white">
                  4
                </p>
                <p className="text-gray-500 text-xs">Requests</p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handelProfileEdit}
              className="border mb-6 px-6 py-2 border-green-600 hover:bg-green-600  text-green-600 hover:text-white  rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer  text-center"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {/* modal  */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <div className="bg-white dark:bg-base-200 rounded-xl shadow-xs p-4 sm:p-5 border border-gray-300 dark:border-gray-700 relative">
            <div className="text-center mb-2">
              <h1 className="text-center text-2xl font-bold">
                Edit <span className="text-green-600">Profile</span>
              </h1>
            </div>

            <form onSubmit={handelEdit}>
              <div className=" first:pt-0 last:pb-0 border-t first:border-transparent space-y-5">
                <div>
                  <label className="inline-block text-sm font-medium">
                    Name
                  </label>

                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full  shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="Your Name"
                      name="name"
                      required
                      defaultValue={loginUser?.displayName}
                    />
                  </div>
                </div>

                <div>
                  <label className="inline-block text-sm font-medium">
                    Image Url
                  </label>

                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="https://..."
                      name="photo"
                      defaultValue={loginUser?.photoURL}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex justify-end gap-x-2">
                <button
                  type="button"
                  onClick={modalClose}
                  className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-hidden focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Edit
                </button>
              </div>
              {formError && (
                <p className="text-sm text-red-600 mt-2">{formError}</p>
              )}
            </form>
            <button
              onClick={modalClose}
              className="absolute -top-5 -right-5 bg-rose-600 h-6 w-6 rounded-full shadow-2xl cursor-pointer flex justify-center items-center"
            >
              <TiDeleteOutline className="h-full w-full text-white" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
