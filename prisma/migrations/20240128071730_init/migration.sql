-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "account_type" TEXT NOT NULL,
    "subkey" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "groupname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersubkey" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "pagename" TEXT NOT NULL,
    "groupid" INTEGER NOT NULL,
    "content" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_subkey_key" ON "User"("subkey");

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupname_usersubkey_key" ON "Group"("groupname", "usersubkey");

-- CreateIndex
CREATE UNIQUE INDEX "Page_pagename_groupid_key" ON "Page"("pagename", "groupid");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_usersubkey_fkey" FOREIGN KEY ("usersubkey") REFERENCES "User"("subkey") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_groupid_fkey" FOREIGN KEY ("groupid") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
