import { prismaClient } from '../config/database-client';

export async function updateUser(user: any) {
  await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      residence: user.residence,
      profile_photo: user?.photoUrl,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      profile_photo: true,
      residence: true,
    },
  });
}

export async function createUser(userId: number, userData: any) {}
