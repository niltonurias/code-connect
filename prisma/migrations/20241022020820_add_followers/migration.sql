-- AlterTable
ALTER TABLE "User" ADD COLUMN     "biography" TEXT;

-- CreateTable
CREATE TABLE "UserFollower" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "followedById" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,

    CONSTRAINT "UserFollower_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserFollower" ADD CONSTRAINT "UserFollower_followedById_fkey" FOREIGN KEY ("followedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollower" ADD CONSTRAINT "UserFollower_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
