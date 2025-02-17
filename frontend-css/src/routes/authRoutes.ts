import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
