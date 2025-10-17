import React, {  use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;