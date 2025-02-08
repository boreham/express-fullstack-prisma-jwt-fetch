import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 100px;
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  color: #333;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Страница не найдена</NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
