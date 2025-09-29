import React, { useState } from "react";
import Link from "./Link";
import { TextAlignJustify, X } from "lucide-react";

const Navbar = () => {
  const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  const links = navigationData.map((route, index) => (
    <Link key={index} route={route}></Link>
  ));

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex justify-between mx-10 my-5">
      <span onClick={handleMenu} className="flex">
        {toggleMenu ? (
          <X className="md:hidden"></X>
        ) : (
          <TextAlignJustify className="md:hidden"></TextAlignJustify>
        )}
        <ul
          className={`md:hidden absolute bg-amber-200 
          ${toggleMenu ? "top-14 duration-500" : "-top-40 duration-500 "}
          `}
        >
          {links}
        </ul>
        <h3>Navbar</h3>
      </span>

      <ul className="md:flex hidden">{links}</ul>

      {/* <ul className="flex">
        {navigationData.map((route) => (
          <li className="mr-10">
            {" "}
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className='flex '>
            <li className='mr-10'><a href="/">Home</a></li>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="/services">Services</a></li>
            <li className='mr-10'><a href="/projects">Projects</a></li>
        </ul> */}
      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
