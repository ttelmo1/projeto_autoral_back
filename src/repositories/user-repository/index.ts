import { Prisma } from '@prisma/client';
import { prisma } from '@/config';
import { SignUp } from '@/protocols';

async function findByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}

async function create({ name, email, password }: SignUp) {
  return prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
