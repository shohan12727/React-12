import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:text-white hover:bg-[#002855] transition-colors duration-300 active:bg-[#002855] active:text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:text-white hover:bg-[#002855] transition-colors duration-300 active:bg-[#002855] active:text-white"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:text-white hover:bg-[#002855] transition-colors duration-300 active:bg-[#002855] active:text-white"
        >
          Login
        </NavLink>
      </li>
      {
        user && <>
             <li>
        <NavLink
          to="/orders"
          className="px-4 py-2 rounded-md font-semibold text-gray-700 hover:text-white hover:bg-[#002855] transition-colors duration-300 active:bg-[#002855] active:text-white"
        >
          Order
        </NavLink>
      </li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">K.Shohan</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handleSignOut} className="btn">
            Sign out
          </a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
