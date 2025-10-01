import React, { use } from 'react';

const User2 = ({userPromsie}) => {


    const userData = use(userPromsie)
     console.log(userData);
     

    return (
        <div>
            <h2>I am side chick</h2>
        </div>
    );
};

export default User2;