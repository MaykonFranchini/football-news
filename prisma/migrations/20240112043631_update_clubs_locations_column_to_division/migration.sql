/*
  Warnings:

  - You are about to drop the column `location` on the `clubs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clubs" DROP COLUMN "location",
ADD COLUMN     "division" TEXT NOT NULL DEFAULT 'Brasil';
