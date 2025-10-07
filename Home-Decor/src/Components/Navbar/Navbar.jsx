import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300"
          to="/wishlist"
        >
          Wishlist
        </NavLink>
      </li>
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          HomeDecor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        <Link to="/products" className="btn">
          Visit Shop
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
