import { Request, Response } from 'express';
import * as authService from '../services/authService';
import { isValidEmail, isValidPassword } from '../utils/validation';

/**
 * Регистрация пользователя.
 * Валидация:
 * - Проверяется наличие обязательных полей email и password.
 * - Проверяется корректность формата email.
 * - Проверяется минимальная длина пароля.
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, username, password } = req.body;

    // Проверка наличия обязательных полей
    if (!email || !password) {
      res.status(400).json({ message: 'Email и пароль обязательны для регистрации' });
      return;
    }

    // Валидация формата email
    if (!isValidEmail(email)) {
      res.status(400).json({ message: 'Неверный формат email' });
      return;
    }

    // Валидация длины пароля
    if (!isValidPassword(password)) {
      res.status(400).json({ message: 'Пароль должен содержать минимум 6 символов' });
      return;
    }

    // Если валидация прошла, регистрируем пользователя через authService
    const user = await authService.registerUser({ email, username, password });
    res.status(201).json({ message: 'Пользователь зарегистрирован', user });
  } catch (error: any) {
    console.error('Ошибка регистрации:', error);
    res.status(400).json({ message: error.message || 'Ошибка регистрации' });
  }
};

/**
 * Авторизация пользователя.
 * Валидация:
 * - Проверяется наличие обязательных полей email и password.
 * - Проверяется корректность формата email.
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Проверка наличия обязательных полей
    if (!email || !password) {
      res.status(400).json({ message: 'Email и пароль обязательны для входа' });
      return;
    }

    // Валидация формата email
    if (!isValidEmail(email)) {
      res.status(400).json({ message: 'Неверный формат email' });
      return;
    }

    // Попытка авторизации через authService
    const token = await authService.loginUser({ email, password });
    if (!token) {
      res.status(401).json({ message: 'Неверные учётные данные' });
      return;
    }
    res.status(200).json({ token });
  } catch (error: any) {
    console.error('Ошибка входа:', error);
    res.status(500).json({ message: 'Ошибка входа' });
  }
};

/**
 * Выход пользователя.
 * В JWT logout обычно реализуется на стороне клиента либо через blacklist-токены.
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ message: 'Вы успешно вышли из системы' });
};
