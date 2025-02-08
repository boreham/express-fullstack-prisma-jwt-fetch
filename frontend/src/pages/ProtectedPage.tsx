import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent';

const Container = styled.div`
  padding: 20px;
`;

const ProtectedPage: React.FC = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return (
    <Container>
      <HeaderComponent />
      <h1>Protected Page</h1>
      <p>Эта страница доступна только авторизованным пользователям.</p>
      <p>{token}</p><br/>
    </Container>
  );
};

export default ProtectedPage;
