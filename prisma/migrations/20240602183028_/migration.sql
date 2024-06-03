/*
  Warnings:

  - You are about to drop the column `subType` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "subType",
DROP COLUMN "type",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Photoshop',
ADD COLUMN     "subCategory" TEXT NOT NULL DEFAULT '';
