import { Prisma } from '@prisma/client';
import { prisma } from '@/config';
import { SignUp } from '@/protocols';

async function findByEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email: email,
    },
  });
}

async function findById(id: number) {
  const user = await prisma.users.findFirst({
    where: {
      id,
    },
  });

  return user;
}


async function create({ name, email, password }: SignUp) {
  return prisma.users.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
}

const userRepository = {
  findByEmail,
  findById,
  create,
};

export default userRepository;
