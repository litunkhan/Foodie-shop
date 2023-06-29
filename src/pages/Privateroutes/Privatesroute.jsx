/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Firebase/Authprobider";


const Privateroute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()

    if (loader){
        return <div><p>Loading...</p></div>
    }

    else if(user){
        return children
    }
    
    
   else{
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
  
}
    


export default Privateroute;