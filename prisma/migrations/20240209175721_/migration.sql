/*
  Warnings:

  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - Added the required column `userName` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userName",
ADD COLUMN     "password" TEXT NOT NULL;
