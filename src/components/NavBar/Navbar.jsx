import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import { toast } from 'react-toastify';
import studyMate from '../../assets/studyMate.png';

const Navbar = () => {
  const { loginUser, setLoginUser, loader, logout } = use(AuthContext);

  const handelLogout = () => {
    logout()
      .then(() => {
        setLoginUser(null);
        toast('User Log Out');
      })
      .catch((error) => toast.error(error.message));
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/find-partners">Find Partners</NavLink>
      </li>
      <li>
        <NavLink to="/create-partner-profile">Create Partner Profile</NavLink>
      </li>
      <li>
        <NavLink to="/my-connections">My Connections</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src={studyMate} alt="" />
          </div>
          <h1 className="text-xl font-bold  bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
            StudyMate
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {loginUser ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={loginUser.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              <li>
                <Link to="/my-profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <button
                  onClick={handelLogout}
                  className="bg-rose-600 text-white"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : loader ? (
          ''
        ) : (
          <div className="flex gap-1">
            <Link
              to="/login"
              className="btn bg-green-500 rounded-2xl text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-green-500 rounded-2xl text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
