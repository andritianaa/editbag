-- CreateTable
CREATE TABLE "plan" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT,
    "variantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" TEXT NOT NULL,
    "isUsageBased" BOOLEAN NOT NULL DEFAULT false,
    "interval" TEXT,
    "intervalCount" INTEGER,
    "trialInterval" TEXT,
    "trialIntervalCount" INTEGER,
    "sort" INTEGER,

    CONSTRAINT "plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plan_variantId_key" ON "plan"("variantId");
