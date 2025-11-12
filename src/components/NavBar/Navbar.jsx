import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import { toast } from 'react-toastify';
import studyMate from '../../assets/studyMate.png';
import { IsDarkContext } from '../../Context/Theme/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { loginUser, setLoginUser, loader, logout } = use(AuthContext);
  const { theme, setTheme } = use(IsDarkContext);

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handelTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

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
        <NavLink
          className={({ isActive }) =>
            ` ${isActive && 'bg-green-600 text-white'} rounded-full`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive && 'bg-green-600 text-white'} rounded-full`
          }
          to="/find-partners"
        >
          Find Partners
        </NavLink>
      </li>
      {loginUser && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive && 'bg-green-600 text-white'} rounded-full`
            }
            to="/create-partner-profile"
          >
            Create Partner Profile
          </NavLink>
        </li>
      )}
      {loginUser && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive && 'bg-green-600 text-white'} rounded-full`
            }
            to="/my-connections"
          >
            My Connections
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl fixed z-50  mt-5 w-full px-2">
        <div className="navbar bg-white/10 backdrop-blur-2xl shadow-sm rounded-full">
          <div className="navbar-start space-x-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden rounded-full hover:bg-green-600 shadow-none hover:border-green-600"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1"
              >
                {navlinks}
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img src={studyMate} alt="" />
              </div>
              <h1 className="text-xl font-bold  bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
                StudyMate
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">{navlinks}</ul>
          </div>
          <div className="navbar-end space-x-2">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
                defaultChecked={theme === 'dark' ? true : false}
                onChange={(e) => handelTheme(e.target.checked)}
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
            {loginUser ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="min-w-10 min-h-10 rounded-full">
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
                  className=" px-4 py-2 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white font-semibold transition duration-300 cursor-pointer w-full md:w-fit text-xs md:text-base text-center rounded-full"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className=" hidden md:flex px-4 py-2 border border-green-600 hover:bg-green-600  text-green-600 hover:text-white font-semibold transition duration-300 cursor-pointer w-full md:w-fit text-xs md:text-base text-center rounded-full"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
