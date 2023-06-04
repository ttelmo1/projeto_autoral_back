import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { duplicatedEmailError } from './errors';
import userRepository from '@/repositories/user-repository';
import { conflictError, invalidDataError } from '@/errors';
import { SignUp } from '@/protocols';

async function createUser({ name, email, password }: SignUp) {
  await userRepository.findByEmail(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.create({ name, email, password: hashPassword });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

async function login(email: string, password: string) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw conflictError('Email or password is invalid');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw conflictError('Email or password is invalid');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

const userService = {
  createUser,
  login,
};

export * from './errors';
export default userService;
