import React, { use } from 'react';
import { AuthContext } from '../Context/Firebase/FirebaseContext';
import DefaultLoader from '../components/Loader/DefaultLoader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { loginUser, loader } = use(AuthContext);
  const location = useLocation();
  if (loader) {
    return <DefaultLoader></DefaultLoader>;
  }
  if (loginUser) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
