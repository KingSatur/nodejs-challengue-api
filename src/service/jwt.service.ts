import { User } from '@prisma/client';
import * as JWT from 'jsonwebtoken';
import properties from '../config/properties';

export default function signToken(user: User) {
  return JWT.sign(
    {
      id: user.id,
      role: user.role,
    },
    properties.jwt_seed
  );
}
