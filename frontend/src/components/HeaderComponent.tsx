import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../services/authService';

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1000; /* Чтобы хедер был выше остального контента */
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Немного тени для отделения от контента */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Отталкивает элементы вправо */
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #555;
  border: none;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #777;
  }
`;

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  // Проверяем наличие токена в localStorage или sessionStorage
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  const handleLogout = async () => {
    try {
      // Если на сервере реализован logout, вызываем его
      await logout();
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    }
    // Удаляем токен из обоих хранилищ
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Header>
      <Nav>
        <LeftNav>
          <NavLink to="/">Home</NavLink>
          {token && <NavLink to="/protected">Protected</NavLink>}
        </LeftNav>
        <RightNav>
          {token ? (
            <>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </RightNav>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
