import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '../dto/api-response.dto';

export class PermissionMiddleware {
  public static onlySameUserCanPerformOperation(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    const { id } = request.params;
    if (request.body.decoded.id === id) {
      next();
    } else {
      const apiResponse: ApiResponse<any> = {
        success: true,
        transactionData: {
          message: 'Unauthorized',
          status: 403,
        },
      };
      response.json(apiResponse);
    }
  }
}
