-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "categoriesId" INTEGER,
ADD COLUMN     "subType" TEXT NOT NULL DEFAULT 'Photoshop';

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SubCategories_pkey" PRIMARY KEY ("id")
);
