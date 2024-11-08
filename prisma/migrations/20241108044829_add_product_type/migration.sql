/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `client` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `deliveryMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `type` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProdutoTipo" AS ENUM ('MARMITA_COMPLETA', 'MARMITA_REFRI', 'MARMITA_SUCO');

-- CreateEnum
CREATE TYPE "DeliveryMethod" AS ENUM ('DELIVERY', 'RETIRADA');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('PIX', 'DINHEIRO', 'CARTAO');

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_clientId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "client" TEXT NOT NULL,
DROP COLUMN "deliveryMethod",
ADD COLUMN     "deliveryMethod" "DeliveryMethod" NOT NULL,
DROP COLUMN "paymentMethod",
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL,
ALTER COLUMN "deliveryConfirmed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "type" "ProdutoTipo" NOT NULL;

-- DropTable
DROP TABLE "Client";
