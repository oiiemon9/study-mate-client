import React, { useEffect, useRef, useState } from 'react';
import Partner from './Partner';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import Error from '../../components/Error/Error';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const FindPartners = () => {
  const axiosInstance = useAxiosHook();
  const [partners, setPartners] = useState();
  const searchRef = useRef();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoader(true);
    const dataLoad = async () => {
      try {
        const result = await axiosInstance.get('/all-partners');
        setPartners(result.data);
      } catch (error) {
        if (error.status === 404) {
          setError(error.status);
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoader(false);
      }
    };
    dataLoad();
  }, []);

  const handelSearch = async (e) => {
    e.preventDefault();
    setLoader(true);
    const value = e.target.search.value;
    const sort = e.target.sort.value;

    try {
      const result = await axiosInstance.get(
        `/find-partners?search=${value}&&sortBy=${sort}`
      );
      setPartners(result.data);
    } catch (error) {
      if (error.status === 404) {
        setError(error.status);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoader(false);
    }
  };
  const handelSort = async (e) => {
    const sortValue = e.target.value;
    const searchValue = searchRef.current.value;
    setLoader(true);

    try {
      const result = await axiosInstance.get(
        `/find-partners?search=${searchValue}&&sortBy=${sortValue}`
      );
      setPartners(result.data);
    } catch (error) {
      if (error.status === 404) {
        setError(error.status);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoader(false);
    }
  };

  if (error) {
    return <Error></Error>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-2 mb-24 mt-32 ">
      <Helmet>
        <title>Find Partners | Study Mate</title>
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
          Find Your Study <span className="text-green-600">Partner</span>
        </h1>
      </div>

      <form
        onSubmit={handelSearch}
        className="flex  flex-col-reverse md:flex-row items-center justify-between gap-2 mt-24"
      >
        <select onChange={handelSort} name="sort" className="select max-w-44">
          <option value="">Default</option>
          {/* Beginner / Intermediate / Expert */}
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <div className="flex items-center">
          <div className="space-y-3">
            <input
              type="search"
              ref={searchRef}
              className="py-2 px-3 block  shadow-2xs text-sm  outline-1 outline-gray-300 dark:outline-gray-700  focus:outline-2 focus:outline-green-600"
              placeholder="Search..."
              name="search"
            />
          </div>
          <div>
            <button className="btn rounded-r-2xl bg-green-600 text-white">
              Search
            </button>
          </div>
        </div>
      </form>
      {loader ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border rounded-2xl border-gray-200 dark:border-gray-700 flex flex-col justify-between animate-pulse"
            >
              {/* Image part */}
              <div className="m-4 aspect-[1/1] relative">
                <div className="skeleton h-full w-full rounded-2xl"></div>
                <div className="absolute top-3 right-3 bg-white/40 backdrop-blur-lg px-2 py-1 rounded-full">
                  <div className="skeleton h-3 w-12 rounded-full"></div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
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

              <div className="p-4">
                <div className="skeleton h-10 w-full rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      ) : partners?.length === 0 ? (
        <p className="text-center text-2xl font-bold text-gray-500/90 mt-10">
          Partner Not Found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
          {partners?.map((profile) => (
            <Partner key={profile._id} profile={profile}></Partner>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindPartners;
