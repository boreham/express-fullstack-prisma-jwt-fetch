import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  const response = await axios.post(`${API_URL}/register`, { email, username, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  // Ожидается, что сервер вернёт объект { token: string }
  return response.data.token;
};

export const logout = async () => {
  // Если сервер поддерживает logout, можно вызвать этот эндпоинт.
  // В JWT logout часто реализуется на стороне клиента (удалением токена).
  await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
      },
    }
  );
};
