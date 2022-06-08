import { NextFunction, Request, Response } from 'express';
import authService from '../service/auth.service';
import { RegisterUserDto } from '../dto/auth/register-user.dto';
import { ApiResponse } from '../dto/api-response.dto';
import { TokenDto } from '../dto/auth/token.dto';
import { LoginDto } from '../dto/auth/login.dto';

export async function registerUser(req: Request, res: Response, next: NextFunction) {
  try {
    const registerUserDto = req.body as RegisterUserDto;
    const tokenDto: TokenDto = await authService.registerUser(registerUserDto);
    const response: ApiResponse<TokenDto> = {
      data: tokenDto,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<ApiResponse<TokenDto | any>>> {
  try {
    const loginUserDto = req.body as LoginDto;
    const tokenDto: TokenDto = await authService.loginUser(loginUserDto);
    const response: ApiResponse<TokenDto> = {
      data: tokenDto,
      success: true,
      transactionData: {
        message: 'Success transaction',
        status: 200,
      },
    };
    return res.json(response);
  } catch (error) {
    return res.status(401).json({
      data: null,
      success: false,
      transactionData: {
        message: 'Bad credentiales',
        status: 401,
      },
    });
  }
}
