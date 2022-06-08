import { config } from 'dotenv';

config();

export default {
  jwt_seed: process.env.JWT_SECRET || '`-=12-`12?d.2qw3xa?+_@',
  port: process.env.PORT || 3000,
};
