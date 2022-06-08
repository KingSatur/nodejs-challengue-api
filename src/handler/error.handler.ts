import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../dto/api-response.dto';
export default function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<ApiResponse<any>> {
  const response: ApiResponse<any> = {
    success: false,
    transactionData: {
      message: err?.message || 'Error in application',
      status: err?.httpStatus || 500,
    },
    data: null,
  };
  return res.status(err?.httpStatus || 500).json(response);
}
