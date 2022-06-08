import { ProductDto } from './product.dto';
export interface PurchaseByCustomerOutputDto {
  quantity: number;
  product: Partial<ProductDto>;
  total: number;
}
