-- CreateTable
CREATE TABLE "message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
