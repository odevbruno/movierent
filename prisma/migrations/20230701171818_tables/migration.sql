/*
  Warnings:

  - The primary key for the `moviesRent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `moviesRent` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "moviesRent" DROP CONSTRAINT "moviesRent_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "moviesRent_pkey" PRIMARY KEY ("id");
