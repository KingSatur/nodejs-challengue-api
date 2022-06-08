import { BookDto } from './book.dto';
export interface ProductDto {
  name: string;
  price: number;
  quantity: number;
  code: string;
  bookDto?: BookDto;
}
