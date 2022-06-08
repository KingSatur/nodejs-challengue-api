import { hashSync, compareSync } from 'bcryptjs';
import { User } from '@prisma/client';
import { RegisterUserDto } from '../dto/auth/register-user.dto';
import { TokenDto } from '../dto/auth/token.dto';
import { LoginDto } from '../dto/auth/login.dto';
import signToken from './jwt.service';
import { prismaClient } from '../config/database-client';

async function registerUser(registerUserDto: RegisterUserDto): Promise<TokenDto> {
  registerUserDto.password = hashSync(registerUserDto.password);
  const user: User = await prismaClient.user.create({
    data: {
      email: registerUserDto.email,
      first_name: registerUserDto.firstName,
      last_name: registerUserDto.lastName,
      password: registerUserDto.password,
      role: registerUserDto.role,
    },
  });
  const token = signToken(user);
  return {
    token,
  };
}

async function loginUser(loginDto: LoginDto): Promise<TokenDto> {
  const user: User | null = await prismaClient.user.findUnique({
    where: { email: loginDto.email },
  });
  if (!user) {
    throw new Error();
  }
  console.log(user.password, loginDto.password);
  if (compareSync(loginDto.password, user?.password)) {
    const token = signToken(user);
    return {
      token,
    };
  } else {
    throw new Error();
  }
}

export default {
  registerUser,
  loginUser,
};
