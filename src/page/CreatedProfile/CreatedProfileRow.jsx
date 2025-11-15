import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDeleteForever } from 'react-icons/md';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import Swal from 'sweetalert2';

const CreatedProfileRow = ({
  profile,
  setCreatedProfile,
  createdProfile,
  editModal,
}) => {
  const {
    profileImage,
    name,
    subject,
    studyMode,
    availabilityTime,
    experienceLevel,
    _id,
  } = profile;
  const axiosInstance = useAxiosHook();

  const handelDelete = async (id, name) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete ${name} Partner?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00a63e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/my-created-profile/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const newCreatedProfile = createdProfile.filter(
                (profile) => profile._id !== id
              );
              setCreatedProfile(newCreatedProfile);

              Swal.fire({
                title: 'Deleted!',
                text: 'Your partner has been deleted.',
                icon: 'success',
              });
            }
          })
          .catch((error) => toast.error(error.message));
      }
    });
  };

  return (
    <tr>
      <td className="size-px whitespace-nowrap">
        <div className="ms-6 lg:ps-3 xl:ps-0 pe-6 py-3">
          <div className="flex items-center gap-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-18">
                <img src={profileImage} />
              </div>
            </div>
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                {name}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-white">
            {subject}
          </span>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-white">
            {availabilityTime}
          </span>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-white">
            {experienceLevel}
          </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className=" bg-white/50 dark:bg-base-300 backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full w-fit">
            <div
              className={` ${
                studyMode === 'Online' ? 'bg-green-600' : 'bg-gray-500/90'
              } h-2 w-2 rounded-full`}
            ></div>
            <p
              className={`text-xs   ${
                studyMode === 'Online' ? 'text-green-600' : 'text-gray-500/90'
              }`}
            >
              {studyMode === 'Online' ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
      </td>

      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5 flex gap-2 justify-end ">
          <button
            onClick={() => editModal(_id)}
            className="btn border border-green-600 hover:bg-green-600  text-green-600 hover:text-white   rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer px-1 py-1"
          >
            <CiEdit size={20} /> Edit
          </button>
          <button
            onClick={() => handelDelete(_id, name)}
            className="btn border border-rose-600 hover:bg-rose-600  text-rose-600 hover:text-white rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer px-1 py-1"
          >
            <MdOutlineDeleteForever size={20} /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CreatedProfileRow;

// {
//     "_id": "69105bea6bc33a31dbeac4b4",
//     "name": "Labonno",
//     "profileImage": "https://i.ibb.co/6LwPxbr/343.jpg",
//     "subject": "English",
//     "studyMode": "Online",
//     "availabilityTime": "Evening 9- 10 pm",
//     "location": "dhaka, gazipur",
//     "experienceLevel": "Beginner",
//     "rating": 4.7,
//     "partnerCount": 3,
//     "email": "oiiemon9@gmail.com",
//     "bio": "Hi! I’m here to help you improve your English skills and make learning fun. I love practicing conversations, grammar, and writing together. Let’s study smarter and grow as a team!",
//     "create_at": "2025-11-09T09:16:26.038Z"
// }
