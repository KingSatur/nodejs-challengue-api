import { TransactionDto } from './auth/transaction-data.dto';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  transactionData: TransactionDto;
}
