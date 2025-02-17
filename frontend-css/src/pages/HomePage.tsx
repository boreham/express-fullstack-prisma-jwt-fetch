import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import '../styles/auth.css';

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <HeaderComponent />
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page.</p>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
