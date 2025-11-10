import React from 'react';

const TableRow = ({ connection }) => {
  const { partnerImage, partnerName, subject, studyMode } = connection;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={partnerImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{partnerName}</div>
          </div>
        </div>
      </td>
      <td>{subject}</td>
      <td>
        <div className=" bg-white/50 backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full">
          <div className="bg-green-600 h-2 w-2 rounded-full"></div>
          <p className="text-xs text-green-600">{studyMode}</p>
        </div>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TableRow;
