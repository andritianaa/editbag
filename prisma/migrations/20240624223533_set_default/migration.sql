/*
  Warnings:

  - Made the column `subImage` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "subImage" SET NOT NULL,
ALTER COLUMN "subImage" SET DEFAULT '';
