import React from 'react';
import Home from '../Componetns/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            {/* <Home></Home> */}

            <Outlet></Outlet>
        </div>
    );
};

export default Root;