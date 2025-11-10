import React, { use, useEffect, useState } from 'react';
import TableRow from './TableRow';
import { toast } from 'react-toastify';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';

const MyConnections = () => {
  const [myConnections, setMyConnections] = useState([]);
  const axiosInstance = useAxiosHook();
  const { loginUser } = use(AuthContext);

  useEffect(() => {
    const connections = async () => {
      try {
        const res = await axiosInstance.get(
          `/my-partner?email=${loginUser.email}`
        );
        setMyConnections(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    connections();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-10">
      <div className="text-center ">
        <h1 className="text-center text-2xl font-bold">
          My <span className="text-green-600">Connections</span>
        </h1>
      </div>

      <div className="mt-24">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myConnections.map((connection) => (
                <TableRow
                  key={connection._id}
                  connection={connection}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
