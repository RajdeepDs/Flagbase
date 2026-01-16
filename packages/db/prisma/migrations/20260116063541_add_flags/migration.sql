-- CreateTable
CREATE TABLE "flag" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" BOOLEAN NOT NULL,
    "description" TEXT,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "flag_projectId_idx" ON "flag"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "flag_projectId_key_key" ON "flag"("projectId", "key");

-- AddForeignKey
ALTER TABLE "flag" ADD CONSTRAINT "flag_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
