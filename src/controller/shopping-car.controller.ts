export async function addProductToCar(req: Request, res: Response, next: NextFunction) {
    try {
      const productDtoBody = req.body as ProductDto;
      const productDtoResponse: ProductDto = await ProductService.(
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
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }