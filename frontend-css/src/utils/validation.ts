/**
 * Проверка корректности email с помощью простого регулярного выражения.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Проверка, что пароль имеет минимальную длину (например, 6 символов).
 */
export const isValidPassword = (password: string): boolean => {
  return password.trim().length >= 6;
};
