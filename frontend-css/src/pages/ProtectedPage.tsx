import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import '../styles/auth.css';

const ProtectedPage: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return (
    <div className="page-container">
      <HeaderComponent />
      <h1>Protected Page</h1>
      <p>Эта страница доступна только авторизованным пользователям.</p>
      <p>{token}</p><br />
      <FooterComponent />
    </div>
  );
};

export default ProtectedPage;
