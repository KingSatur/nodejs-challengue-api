import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../dto/api-response.dto';
export default function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<ApiResponse<any>> {
  console.log(err);

  const response: ApiResponse<any> = {
    success: false,
    transactionData: {
      message: 'There was an error',
      status: 500,
    },
    data: null,
  };
  return res.status(500).json(response);
}
