import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {title, id} = post;

     const userStyle = {
        border: '3px solid blue',
        borderRadius: '10px',
        padding: '5px',
        marginBottom: '10px'
    }

    return (
        <div style={userStyle}>
            <h2>Title: {title}</h2>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;