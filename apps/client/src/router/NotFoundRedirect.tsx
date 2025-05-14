import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/shared/context/authContext.ts';

const NotFoundRedirect: React.FC = () => {
  const auth = useContext(AuthContext);

  return <Navigate to={auth.isLoggedIn ? '/' : '/auth'} replace />;
};

export default NotFoundRedirect;
