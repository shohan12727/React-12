import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {body} = post
    
    return (
        <div style={{width: '500px'}}>
            <p><b>Description:</b> {body}</p>
        </div>
    );
};

export default PostDetails;