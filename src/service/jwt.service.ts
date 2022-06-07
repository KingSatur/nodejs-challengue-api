import { User } from '@prisma/client';
import * as JWT from 'jsonwebtoken';
import config from '../config';

function signToken(user: User) {
  return JWT.sign(
    {
      id: user.id,
      role: user.role,
    },
    config.jwt_seed
  );
}

export default {
  signToken,
};
