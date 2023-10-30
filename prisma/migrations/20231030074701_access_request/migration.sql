/*
  Warnings:

  - You are about to drop the `AccesRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AccesRequest";

-- CreateTable
CREATE TABLE "AccessRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT,

    CONSTRAINT "AccessRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccessRequest_email_key" ON "AccessRequest"("email");
