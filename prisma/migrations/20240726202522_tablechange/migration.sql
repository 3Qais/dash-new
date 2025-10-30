/*
  Warnings:

  - You are about to drop the `keys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "keys";

-- CreateTable
CREATE TABLE "licenses" (
    "id" SERIAL NOT NULL,
    "license" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "licenses_license_key" ON "licenses"("license");
