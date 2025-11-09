import React, { useEffect, useRef, useState } from 'react';
import Partner from './Partner';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';

const FindPartners = () => {
  const axiosInstance = useAxiosHook();
  const [partners, setPartners] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await axiosInstance.get('/all-partners');
        setPartners(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataLoad();
  }, []);

  const handelSearch = async (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    const sort = e.target.sort.value;

    try {
      const result = await axiosInstance.get(
        `/find-partners?search=${value}&&sortBy=${sort}`
      );
      setPartners(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handelSort = async (e) => {
    const sortValue = e.target.value;
    const searchValue = searchRef.current.value;

    try {
      const result = await axiosInstance.get(
        `/find-partners?search=${searchValue}&&sortBy=${sortValue}`
      );
      setPartners(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-10">
      <div className="text-center ">
        <h1 className="text-center text-2xl font-bold">
          Find Your Study <span className="text-green-600">Partner</span>
        </h1>
      </div>

      <form
        onSubmit={handelSearch}
        className="flex flex-col md:flex-row items-center justify-between gap-2 mt-24"
      >
        <div className="flex items-center">
          <div className="space-y-3">
            <input
              type="search"
              ref={searchRef}
              className="py-2 px-3 block border-gray-200 shadow-2xs text-sm  outline-1 outline-gray-300 focus:outline-2 focus:outline-green-600"
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

        <select onChange={handelSort} name="sort" className="select max-w-44">
          <option value="">Default</option>
          {/* Beginner / Intermediate / Expert */}
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-14">
        {partners.map((profile) => (
          <Partner key={profile._id} profile={profile}></Partner>
        ))}
      </div>
    </div>
  );
};

export default FindPartners;
