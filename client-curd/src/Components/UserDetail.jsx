import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <h2>User details </h2>
        </div>
    );
};

export default UserDetail;