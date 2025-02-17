const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, username, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка регистрации');
  }

  return response.json();
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка входа');
  }

  const data = await response.json();
  // Ожидается, что сервер вернёт объект { token: string }
  return data.token;
};

export const logout = async () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({}) // если сервер ожидает тело запроса
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка выхода');
  }

  return response.json();
};
