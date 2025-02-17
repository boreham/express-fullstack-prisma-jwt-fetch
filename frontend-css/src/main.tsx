import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedPage from './pages/ProtectedPage';
import NotFoundPage from './pages/NotFoundPage';
// import PrivateRoute from './routes/authRoutes';

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        <Routes>
          {/* Общедоступная страница */}
          <Route path="/" element={<HomePage />} />

          {/* Публичные маршруты (не доступны авторизованному пользователю) */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Защищённые маршруты */}
          <Route element={<PrivateRoute />}>
            <Route path="/protected" element={<ProtectedPage />} />
          </Route>
          {/* Маршрут для всех несуществующих путей */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
