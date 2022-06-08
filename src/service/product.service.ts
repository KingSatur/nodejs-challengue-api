import { ProductDto } from '../dto/product/product.dto';
import { prismaClient } from '../config/database-client';
import { UpdateQuantityDto } from '../dto/product/update-quantity.dto';
import { PurchaseDto } from '../dto/product/purchase.dto';
import { UpdateQuantityProductDto } from '../dto/product/update-quantity-out.dto';
import { Book, Product, Purchase } from '@prisma/client';
import { PurchaseCreatedDto } from '../dto/product/purchase-out.dto';
import { PurchaseByCustomerInputDto } from '../dto/product/purchase-customer.dto';
import { ApplicationError } from '../dto/error.dto';
import { PurchaseByCustomerOutputDto } from '../dto/product/purchase-customer-out.dto';

async function addProductToInventory(productDto: ProductDto): Promise<ProductDto> {
  const product: Product = await prismaClient.product.create({
    data: {
      code: productDto.code,
      name: productDto.name,
      price: productDto.price,
    },
  });
  if (productDto.bookDto) {
    const book: Book = await prismaClient.book.create({
      data: {
        author: productDto.bookDto.author,
        isbn: productDto.bookDto.isbn,
        title: productDto.bookDto.title,
        editorial: productDto.bookDto.editorial,
      },
    });
    const result = await prismaClient.product.update({
      where: {
        id: product.id,
      },
      data: {
        book_id: book.id,
      },
    });
  }
  return {
    id: product.id,
    code: product.code,
    name: product.name,
    quantity: product.quantity,
    price: Number(product.price),
  };
}

async function udpateProductQuantity(
  id: number,
  quantityDto: UpdateQuantityDto
): Promise<UpdateQuantityProductDto> {
  const productEntity: Partial<Product> = await prismaClient.product.update({
    where: {
      id,
    },
    data: {
      quantity: quantityDto.newQuantity,
    },
    select: {
      name: true,
      price: true,
      quantity: true,
      code: true,
      id: true,
      updated_at: true,
    },
  });
  return {
    code: productEntity.code,
    name: productEntity.name,
    price: Number(productEntity.price),
    quantity: productEntity.quantity,
  };
}

async function listProducts(page: number, limit: number): Promise<ProductDto[]> {
  const skip = (page - 1) * limit;
  const products: Product[] = await prismaClient.product.findMany({
    skip,
    take: limit,
  });

  const productsDto: ProductDto[] = products?.map((productEntity) => ({
    id: productEntity.id,
    code: productEntity.code,
    name: productEntity.name,
    quantity: productEntity.quantity,
    price: Number(productEntity.price),
  }));

  return productsDto;
}

async function purchaseByCustomer(
  id: number,
  purchaseDto: PurchaseByCustomerInputDto
): Promise<PurchaseByCustomerOutputDto> {
  const product = await prismaClient.product.findFirst({
    where: {
      id: purchaseDto.productId,
    },
    select: {
      quantity: true,
      price: true,
    },
  });
  if (purchaseDto.quantity > product?.quantity) {
    throw new ApplicationError('', 500);
  } else {
    await prismaClient.product.update({
      where: {
        id: purchaseDto.productId,
      },
      data: {
        quantity: {
          decrement: purchaseDto.quantity,
        },
      },
    });
    const purchase = await prismaClient.customerPurchase.create({
      data: {
        user_id: id,
        product_id: purchaseDto.productId,
        quantity: purchaseDto.quantity,
        total: purchaseDto.quantity * Number(product?.price),
      },
      select: {
        id: true,
        product: {
          select: {
            code: true,
            name: true,
            price: true,
          },
        },
        total: true,
        quantity: true,
      },
    });
    return {
      product: {
        code: purchase.product?.code,
        name: purchase.product?.name,
        price: Number(purchase.product?.price),
      },
      quantity: purchase.quantity,
      total: Number(purchase.total),
    };
  }
}

async function purchaseQuantity(purchaseDto: PurchaseDto): Promise<PurchaseCreatedDto> {
  const purchase: Purchase = await prismaClient.purchase.create({
    data: {
      cost: purchaseDto.price,
      product_id: purchaseDto.productId,
      quantity: purchaseDto.quantity,
    },
  });
  await prismaClient.product.update({
    where: {
      id: purchaseDto.productId,
    },
    data: {
      quantity: {
        increment: purchaseDto.quantity,
      },
    },
    select: {
      id: true,
      quantity: true,
      name: true,
    },
  });
  return {
    id: purchase.id,
    price: Number(purchase.cost),
    productId: purchase.product_id,
    purchasedQuantity: purchaseDto.quantity,
  };
}

export default {
  addProductToInventory,
  udpateProductQuantity,
  purchaseQuantity,
  listProducts,
  purchaseByCustomer,
};
