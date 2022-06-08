import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '../dto/api-response.dto';

const apiResponse: ApiResponse<any> = {
  success: true,
  transactionData: {
    message: 'Unauthorized',
    status: 403,
  },
};

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
      response.status(apiResponse.transactionData.status).json(apiResponse);
    }
  }

  public static onlyAdminCanPerformOperation(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (request.body?.decoded?.role === 'ADMIN') {
      next();
    } else {
      return response.status(apiResponse.transactionData.status).json(apiResponse);
    }
  }
}
