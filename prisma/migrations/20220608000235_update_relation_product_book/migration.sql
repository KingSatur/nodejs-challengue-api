/*
  Warnings:

  - A unique constraint covering the columns `[book_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "book_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Product_book_id_key" ON "Product"("book_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
