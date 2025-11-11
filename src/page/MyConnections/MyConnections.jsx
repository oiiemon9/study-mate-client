import React, { use, useEffect, useRef, useState } from 'react';
import TableRow from './TableRow';
import { toast } from 'react-toastify';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { TiDeleteOutline } from 'react-icons/ti';
import Error from '../../components/Error/Error';
import { Helmet } from 'react-helmet-async';

const MyConnections = () => {
  const [myConnections, setMyConnections] = useState([]);
  const axiosInstance = useAxiosHook();
  const { loginUser } = use(AuthContext);
  const [loading, setLoader] = useState(false);
  const modalRef = useRef();
  const [modalInfo, setModalInfo] = useState({});
  const [modalError, setModalError] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    const connections = async () => {
      setLoader(true);
      try {
        const res = await axiosInstance.get(
          `/my-partner?email=${loginUser.email}`
        );
        setMyConnections(res.data);
      } catch (error) {
        if (error.status > 400) {
          setError(error.status);
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoader(false);
      }
    };
    connections();
  }, []);

  const handelDelete = async (id, partnerName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete ${partnerName} Partner?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00a63e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/my-partner/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const newConnection = myConnections.filter(
                (connection) => connection._id !== id
              );
              setMyConnections(newConnection);

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

  const editModal = (id) => {
    const editPartner = async () => {
      const editPartner = myConnections.find(
        (connection) => connection._id === id
      );
      setModalInfo(editPartner);
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
    const partnerName = form.name.value;
    const subject = form.subject.value;
    const partnerImage = form.profile_image.value;
    const studyMode = form.radio_4.value;

    const value = {
      partnerName,
      subject,
      partnerImage,
      studyMode,
    };

    try {
      const result = await axiosInstance.patch(`/my-partner/${id}`, value);
      if (result.data.modifiedCount) {
        modalRef.current.close();
        Swal.fire({
          icon: 'success',
          title: 'Profile Update Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        setLoader(true);
        try {
          const res = await axiosInstance.get(
            `/my-partner?email=${loginUser.email}`
          );
          setMyConnections(res.data);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoader(false);
        }
      }
      if (!result.data.modifiedCount) {
        setModalError('Please edit something then Click to update');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (error) {
    return <Error></Error>;
  }

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
          My <span className="text-green-600">Connections</span>
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
        ) : myConnections.length === 0 ? (
          <p className="text-center text-2xl font-bold text-gray-500/90">
            Connections Not Found
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
                      {myConnections.map((connection) => (
                        <TableRow
                          key={connection._id}
                          connection={connection}
                          handelDelete={handelDelete}
                          editModal={editModal}
                        ></TableRow>
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
                Edit <span className="text-green-600">Partner</span>
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
                      defaultValue={modalInfo.partnerName}
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
                    Profile Image Url
                  </label>

                  <div className="mt-2 space-y-3">
                    <input
                      type="text"
                      className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg outline-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:outline-blue-600"
                      placeholder="https://..."
                      name="profile_image"
                      required
                      defaultValue={modalInfo.partnerImage}
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
                          defaultChecked
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

export default MyConnections;
