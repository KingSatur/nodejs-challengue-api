import { config } from 'dotenv';

config();

export default {
  jwt_seed: process.env.JWT_SECRET || '',
};
