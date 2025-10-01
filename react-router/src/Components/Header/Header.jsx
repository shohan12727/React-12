import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav style={{display: 'flex', gap: '5px'}}>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to='/users2'>SideChick</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;