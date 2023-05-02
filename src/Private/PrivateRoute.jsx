import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <div className='flex justify-center items-center'>
      <button className="btn btn-ghost loading"></button>
    </div>
  }

  if (user) {
    return children 
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;