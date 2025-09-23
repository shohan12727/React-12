import React from 'react';
import navLogo from '../../assets/logo.png'
import coin from '../../assets/DoubleDollar.png'
const Navbar = () => {
    return (
         <div className="navbar max-w-[1200px] mx-auto mb-4">
        <div className="flex-1">
          <img src={navLogo} alt="" />
        </div>
        <div className="flex gap-1 items-center">
           <span>0</span>
           <span>Coin</span>
           <img src={coin} alt="" />
        </div>
      </div>
    );
};

export default Navbar;