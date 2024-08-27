/*
  Warnings:

  - You are about to drop the column `nextMatchUrl` on the `clubs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clubs" DROP COLUMN "nextMatchUrl",
ADD COLUMN     "next_match_url" TEXT NOT NULL DEFAULT '';
