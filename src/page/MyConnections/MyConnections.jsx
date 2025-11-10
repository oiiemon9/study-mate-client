import React from 'react';
import TableRow from './TableRow';

const MyConnections = () => {
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
              <TableRow></TableRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
