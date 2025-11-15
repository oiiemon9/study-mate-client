import React, { use, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import FirebaseContext, {
  AuthContext,
} from '../../Context/Firebase/FirebaseContext';
import CreatedProfileRow from './CreatedProfileRow';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CreatedProfile = () => {
  const [loading, setLoading] = useState(false);
  const { loginUser } = use(AuthContext);
  const [createdProfile, setCreatedProfile] = useState([]);
  const axiosInstance = useAxiosHook();
  const modalRef = useRef();
  const [modalInfo, setModalInfo] = useState({});
  const [modalError, setModalError] = useState('');

  useEffect(() => {
    const createdProfile = async () => {
      setLoading(true);
      try {
        const result = await axiosInstance.get(
          `/my-created-profile?email=${loginUser.email}`
        );
        setCreatedProfile(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    createdProfile();
  }, []);

  const editModal = (id) => {
    const editPartner = async () => {
      const editProfile = createdProfile.find((profile) => profile._id === id);
      setModalInfo(editProfile);
      modalRef.current.showModal();
    };
    editPartner();
  };
  const modalClose = () => {
    modalRef.current.close();
    setModalError('');
  };

  const updatePartner = async (e) => {
    e.preventDefault();
    setModalError('');
    const id = modalInfo._id;
    const form = e.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const profileImage = form.profile_image.value;
    const studyMode = form.radio_4.value;
    const availabilityTime = form.Time.value;
    const location = form.Location.value;
    const experienceLevel = form.level.value;

    const value = {
      name,
      subject,
      profileImage,
      studyMode,
      availabilityTime,
      location,
      experienceLevel,
    };

    try {
      const result = await axiosInstance.patch(
        `/my-created-profile/${id}`,
        value
      );
      if (result.data.modifiedCount) {
        modalRef.current.close();
        Swal.fire({
          icon: 'success',
          title: 'Profile Update Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(true);
        try {
          const result = await axiosInstance.get(
            `/my-created-profile?email=${loginUser.email}`
          );
          setCreatedProfile(result.data);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      }
      if (!result.data.modifiedCount) {
        setModalError('Please edit something then Click to update');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2  mb-24 mt-32">
      <Helmet>
        <title>My Connections | Study Mate</title>
        <meta
          name="description"
          content="Find your perfect study partner and achieve your goals together!"
        />
        <meta
          name="keywords"
          content="study partner, learning, education, connect"
        />
      </Helmet>
      <div className="text-center ">
        <h1 className="text-center text-2xl font-bold">
          My Created <span className="text-green-600">Profiles</span>
        </h1>
      </div>

      <div className="mt-24">
        {loading ? (
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <div className="bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-base-300">
                      <tr>
                        <th className="ps-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Name
                          </span>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Subject
                          </span>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Study Mode
                          </span>
                        </th>
                        <th className="px-6 py-3 text-end">
                          <span className="text-xs font-semibold uppercase text-gray-400">
                            Action
                          </span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {[...Array(4)].map((_, i) => (
                        <tr key={i}>
                          <td className="ps-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="skeleton h-12 w-12 rounded-full"></div>
                              <div>
                                <div className="skeleton h-3 w-24 mb-2"></div>
                                <div className="skeleton h-3 w-16"></div>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="skeleton h-3 w-24"></div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="skeleton h-5 w-20 rounded-full"></div>
                          </td>

                          <td className="px-6 py-4 text-end">
                            <div className="flex gap-2 justify-end">
                              <div className="skeleton h-8 w-16 rounded-xl"></div>
                              <div className="skeleton h-8 w-16 rounded-xl"></div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : createdProfile.length === 0 ? (
          <p className="text-center text-2xl font-bold text-gray-500/90">
            Created Profiles Not Found
          </p>
        ) : (
          <div className="flex flex-col">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="min-w-full inline-block align-middle">
                <div className="bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xs overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-base-300">
                      <tr>
                        <th
                          scope="col"
                          className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2 ms-6">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Name
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Subject
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white text-nowrap">
                              Availability Time
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white text-nowrap">
                              Experience Level
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white text-nowrap">
                              Study Mode
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center justify-end gap-x-2">
                            <span className="text-xs font-semibold uppercase text-gray-800 dark:text-white">
                              Action
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {createdProfile.map((profile, i) => (
                        <CreatedProfileRow
                          key={i}
                          profile={profile}
                          setCreatedProfile={setCreatedProfile}
                          createdProfile={createdProfile}
                          editModal={editModal}
                        ></CreatedProfileRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
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

            <form onSubmit={updatePartner}>
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
                      defaultValue={modalInfo.name}
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
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="Subject"
                      name="subject"
                      required
                      defaultValue={modalInfo.subject}
                    />
                  </div>
                </div>
                <div>
                  <label className="inline-block text-sm font-medium">
                    Availability Time
                  </label>

                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="availability Time"
                      name="Time"
                      required
                      defaultValue={modalInfo.availabilityTime}
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
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="Location..."
                      name="Location"
                      required
                      defaultValue={modalInfo.location}
                    />
                  </div>
                </div>
                <div>
                  <label className="inline-block text-sm font-medium">
                    Experience Level
                  </label>

                  <div className="mt-2">
                    <select
                      className={`py-1.5 sm:py-2 px-3 pe-9 block w-full  shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600 `}
                      name="level"
                      value={modalInfo.experienceLevel}
                      onChange={(e) =>
                        setModalInfo({
                          ...modalInfo,
                          experienceLevel: e.target.value,
                        })
                      }
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

                <div>
                  <label className="inline-block text-sm font-medium">
                    Profile Image Url
                  </label>

                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="https://..."
                      name="profile_image"
                      required
                      defaultValue={modalInfo.profileImage}
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
                          name="radio_4"
                          value="Online"
                          className="radio radio-primary"
                          checked={modalInfo.studyMode === 'Online'}
                          onChange={(e) =>
                            setModalInfo({
                              ...modalInfo,
                              studyMode: e.target.value,
                            })
                          }
                        />
                        Online
                      </label>
                    </div>
                    <div className="mt-2">
                      <label className="label">
                        <input
                          type="radio"
                          name="radio_4"
                          value="Offline"
                          className="radio radio-primary"
                          checked={modalInfo.studyMode === 'Offline'}
                          onChange={(e) =>
                            setModalInfo({
                              ...modalInfo,
                              studyMode: e.target.value,
                            })
                          }
                        />
                        Offline
                      </label>
                    </div>
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
                  Update
                </button>
              </div>
              {modalError && (
                <p className="text-sm text-red-600 mt-2">{modalError}</p>
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

export default CreatedProfile;

// {
//     "_id": "69105cea6bc33a31dbeac4b5",
//     "name": "Abidur Rahman",
//     "profileImage": "https://i.ibb.co/YBKy03VG/2889.jpg",
//     "subject": "Math",
//     "studyMode": "Online",
//     "availabilityTime": "Evening 9- 10 pm",
//     "location": "dhaka, gazipur",
//     "experienceLevel": "Intermediate",
//     "rating": 4.9,
//     "partnerCount": 10,
//     "email": "oiiemon9@gmail.com",
//     "bio": "Passionate about mathematics and always ready to help others improve their problem-solving skills. Let’s team up and make numbers simple and exciting!",
//     "create_at": "2025-11-09T09:20:42.172Z"
// }
