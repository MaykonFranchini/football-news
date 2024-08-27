/*
  Warnings:

  - Added the required column `next_match_url` to the `clubs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clubs" ADD COLUMN     "bg_color" TEXT NOT NULL DEFAULT 'bg-red-900',
ADD COLUMN     "next_match_url" TEXT NOT NULL;
