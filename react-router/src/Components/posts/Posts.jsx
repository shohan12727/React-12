import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
       const postsData = useLoaderData()
    //    console.log(postsData); 
       
       
    return (
        <div>
            <h3>I am from posts </h3>
            <div>
                    {
                        postsData.map(post => <Post key={post.id} post={post}>
                        </Post>)
                    }
            </div>
        </div>
    );
};

export default Posts;