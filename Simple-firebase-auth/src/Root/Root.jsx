import React from 'react';
import Home from '../Components/Home';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;