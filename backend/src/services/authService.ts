import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as authRepository from '../repositories/authRepository';
import { User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

interface RegisterInput {
  email: string;
  username?: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async ({ email, username, password }: RegisterInput): Promise<User> => {
  // Проверка существования пользователя
  const existingUser = await authRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error('Пользователь с таким email уже существует');
  }
  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);
  // Создание пользователя
  const user = await authRepository.createUser({ email, username, password: hashedPassword });
  return user;
};

export const loginUser = async ({ email, password }: LoginInput): Promise<string | null> => {
  const user = await authRepository.findUserByEmail(email);
  if (!user) {
    return null;
  }
  // Сравнение паролей
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  // Генерация JWT-токена
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h'});
  return token;
};
