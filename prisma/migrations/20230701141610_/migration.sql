/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `movies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
