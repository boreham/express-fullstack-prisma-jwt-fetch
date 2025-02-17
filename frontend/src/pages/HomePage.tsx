import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const Container = styled.div`
  padding: 20px;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <HeaderComponent />
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page.</p>
      <FooterComponent />
    </Container>
  );
};

export default HomePage;
