import React from "react";
import logo from "../../src/assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-11/12 mx-auto md:my-6 my-3 gap-3">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
