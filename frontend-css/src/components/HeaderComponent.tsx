import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import '../styles/auth.css';

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    }
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-nav">
          <Link to="/" className="nav-link">Home</Link>
          {token && <Link to="/protected" className="nav-link">Protected</Link>}
        </div>
        <div className="right-nav">
          {token ? (
            <button onClick={handleLogout} className="nav-button">Logout</button>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
