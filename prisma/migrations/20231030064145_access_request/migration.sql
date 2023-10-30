-- CreateTable
CREATE TABLE "AccesRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT,

    CONSTRAINT "AccesRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccesRequest_email_key" ON "AccesRequest"("email");
