import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateUserInput {
  email: string;
  username?: string;
  password: string;
}

export const createUser = async ({ email, username, password }: CreateUserInput): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
  return user;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};
