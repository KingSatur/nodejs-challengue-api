import { BookDto } from './book.dto';
export interface ProductDto {
  id: number;
  name: string;
  price: number;
  quantity: number;
  code: string;
  bookDto?: BookDto;
}
