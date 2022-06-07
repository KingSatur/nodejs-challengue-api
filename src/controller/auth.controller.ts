import { Request, Response } from 'express';
import authService from '../service/auth.service';

export async function registerUser(req: Request, res: Response) {
  return authService.registerUser();
  const user = req.body;
  user.password = Crypto.hash(newUser.password);
}

export async function login(req: Request, res: Response) {}
