/*
  Warnings:

  - The values [video,image] on the enum `ProductTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductTypes_new" AS ENUM ('templates', 'emoji');
ALTER TABLE "Post" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "type" TYPE "ProductTypes_new" USING ("type"::text::"ProductTypes_new");
ALTER TYPE "ProductTypes" RENAME TO "ProductTypes_old";
ALTER TYPE "ProductTypes_new" RENAME TO "ProductTypes";
DROP TYPE "ProductTypes_old";
ALTER TABLE "Post" ALTER COLUMN "type" SET DEFAULT 'templates';
COMMIT;
