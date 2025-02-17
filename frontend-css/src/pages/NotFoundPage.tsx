import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Страница не найдена</p>
      <Link to="/" className="not-found-link">Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
