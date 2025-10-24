import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    // console.log(location);
    
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to='/auth/login'></Navigate>

};

export default PrivateRoute;