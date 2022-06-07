import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router: Router = Router();
const prismaClient: PrismaClient = new PrismaClient();

export default router;
