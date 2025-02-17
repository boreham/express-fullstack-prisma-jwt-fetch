import React from 'react';
import '../styles/auth.css';

const FooterComponent: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
