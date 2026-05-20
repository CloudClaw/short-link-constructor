/*
  Warnings:

  - Added the required column `userId` to the `short_link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "short_link" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "short_link" ADD CONSTRAINT "short_link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
