import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;