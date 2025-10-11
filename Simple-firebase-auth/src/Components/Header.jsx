import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
       <nav style={{display: 'flex', gap: '10px'}}>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/login'>Login</NavLink>
       </nav>
    );
};

export default Header;