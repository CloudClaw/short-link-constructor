-- CreateTable
CREATE TABLE "short_link" (
    "id" SERIAL NOT NULL,
    "originalLink" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "short_link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "short_link_id_key" ON "short_link"("id");
