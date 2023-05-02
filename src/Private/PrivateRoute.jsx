import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <div>Loading</div>
  }

  if (user) {
    return children 
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;