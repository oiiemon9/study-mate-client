import { Link } from 'react-router';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDeleteForever } from 'react-icons/md';

const TableRow = ({ connection, handelDelete, editModal }) => {
  const { partnerImage, partnerName, subject, studyMode, _id } = connection;

  return (
    <tr>
      <td className="size-px whitespace-nowrap">
        <div className="ms-6 lg:ps-3 xl:ps-0 pe-6 py-3">
          <div className="flex items-center gap-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-18">
                <img src={partnerImage} />
              </div>
            </div>
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                {partnerName}
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
            onClick={() => handelDelete(_id, partnerName)}
            className="btn border border-rose-600 hover:bg-rose-600  text-rose-600 hover:text-white rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer px-1 py-1"
          >
            <MdOutlineDeleteForever size={20} /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
