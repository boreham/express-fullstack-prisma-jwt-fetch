import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 10; /* Чтобы футер не загораживал контент */
`;

const MainContent = styled.main`
  padding-bottom: 40px; /* Чтобы контент не перекрывался футером */
`;

const FooterComponent: React.FC = () => {
  return (
    <MainContent>
      <Footer>
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </Footer>
    </MainContent>
  );
};

export default FooterComponent;
