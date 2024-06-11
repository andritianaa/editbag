/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "WebhookEvent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventName" TEXT NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "body" JSONB NOT NULL,
    "processingError" TEXT,

    CONSTRAINT "WebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" SERIAL NOT NULL,
    "lemonSqueezyId" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "statusFormatted" TEXT NOT NULL,
    "renewsAt" TEXT,
    "endsAt" TEXT,
    "trialEndsAt" TEXT,
    "price" TEXT NOT NULL,
    "isUsageBased" BOOLEAN NOT NULL DEFAULT false,
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionItemId" INTEGER,
    "userId" INTEGER NOT NULL,
    "planId" TEXT NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscription_lemonSqueezyId_key" ON "subscription"("lemonSqueezyId");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_id_key" ON "Plan"("id");

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
