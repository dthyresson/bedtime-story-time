-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Story" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "adjectiveId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en',
    CONSTRAINT "Story_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Story_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Story_adjectiveId_fkey" FOREIGN KEY ("adjectiveId") REFERENCES "Adjective" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Story_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Story" ("activityId", "adjectiveId", "animalId", "colorId", "createdAt", "description", "id", "pictureUrl", "story", "summary", "title", "updatedAt") SELECT "activityId", "adjectiveId", "animalId", "colorId", "createdAt", "description", "id", "pictureUrl", "story", "summary", "title", "updatedAt" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
