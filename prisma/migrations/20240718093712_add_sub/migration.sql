/*
  Warnings:

  - You are about to drop the column `lemonSqueezyId` on the `subscription` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "subscription_lemonSqueezyId_key";

-- AlterTable
ALTER TABLE "subscription" DROP COLUMN "lemonSqueezyId";
