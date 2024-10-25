import React from 'react';
import { Navigate } from "react-router-dom";
const Protectedroute = ({auth, children}) => {
    if(auth) 
        return children;
    return <Navigate to={'login'}/>
    
}

export default Protectedroute;
