import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

   const location = useLocation();


  if (loading) {
    return <div className='flex justify-center items-center'>
      <button className="btn btn-ghost loading"></button>
    </div>
  }

  if (user) {
    return children 
  } else {
    return <Navigate to={"/login"} state={{from: location}} replace ></Navigate>;
  }
};

export default PrivateRoute;