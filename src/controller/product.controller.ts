import { NextFunction, Request, Response } from 'express';
import ProductService from '../service/product.service';
import { ProductDto } from '../dto/product/product.dto';
import { ApiResponse } from '../dto/api-response.dto';
import { UpdateQuantityProductDto } from '../dto/product/update-quantity-out.dto';
import { UpdateQuantityDto } from '../dto/product/update-quantity.dto';
import { PurchaseDto } from '../dto/product/purchase.dto';
import { PurchaseCreatedDto } from '../dto/product/purchase-out.dto';
import productService from '../service/product.service';
import { PurchaseByCustomerOutputDto } from '../dto/product/purchase-customer-out.dto';
import { PurchaseByCustomerInputDto } from '../dto/product/purchase-customer.dto';

export async function addProductHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const productDtoBody = req.body as ProductDto;
    const productDtoResponse: ProductDto = await ProductService.addProductToInventory(
      productDtoBody
    );
    const response: ApiResponse<ProductDto> = {
      data: productDtoResponse,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function updateProductQuantityHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const body = req.body as UpdateQuantityDto;
    const responseDto: UpdateQuantityProductDto =
      await ProductService.udpateProductQuantity(Number(id), body);
    const response: ApiResponse<UpdateQuantityProductDto> = {
      data: responseDto,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function listProductsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit } = req.query;
    const responseDto: ProductDto[] = await ProductService.listProducts(
      Number(page),
      Number(limit)
    );
    const response: ApiResponse<ProductDto[]> = {
      data: responseDto,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function purchaseQuantityHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body as PurchaseDto;
    const responseDto: PurchaseCreatedDto = await ProductService.purchaseQuantity(body);
    const response: ApiResponse<PurchaseCreatedDto> = {
      data: responseDto,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export async function purchaseProductByCustomer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const body = req.body as PurchaseByCustomerInputDto;
    const responseDto: PurchaseByCustomerOutputDto =
      await productService.purchaseByCustomer(Number(id), body);
    const response: ApiResponse<PurchaseByCustomerOutputDto> = {
      data: responseDto,
      success: true,
      transactionData: {
        message: 'Operation was success',
        status: 200,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
