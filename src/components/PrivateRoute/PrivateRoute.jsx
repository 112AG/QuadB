import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({Login, children}) {
    if(Login){
        return children;
    }else{
        return <Navigate to='/'/>
    }
}

export default PrivateRoute