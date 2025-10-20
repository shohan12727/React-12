import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <Navigate to="category/1"></Navigate>
        // <h2>home</h2>
    );
};

export default Home;