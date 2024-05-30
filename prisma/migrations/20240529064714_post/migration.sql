/*
  Warnings:

  - Added the required column `fileUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "fileUrl" TEXT NOT NULL,
ADD COLUMN     "subImage" TEXT;
