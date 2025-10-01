import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user;

 
    const userStyle = {
        border: '2px solid green',
        borderRadius: '10px',
        padding: '5px',
        marginBottom: '10px'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone no.{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;