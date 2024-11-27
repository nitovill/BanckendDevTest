-- CreateTable
CREATE TABLE "Campaing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "totalResponses" INTEGER NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL,
    "questionIDs" TEXT[],

    CONSTRAINT "Campaing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audience" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ageFrom" INTEGER,
    "ageTo" INTEGER,
    "gender" TEXT,
    "Country" TEXT,
    "State" TEXT,

    CONSTRAINT "Audience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "campaignID" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CampaignAudiences" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CampaignAudiences_AB_unique" ON "_CampaignAudiences"("A", "B");

-- CreateIndex
CREATE INDEX "_CampaignAudiences_B_index" ON "_CampaignAudiences"("B");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_campaignID_fkey" FOREIGN KEY ("campaignID") REFERENCES "Campaing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignAudiences" ADD CONSTRAINT "_CampaignAudiences_A_fkey" FOREIGN KEY ("A") REFERENCES "Audience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignAudiences" ADD CONSTRAINT "_CampaignAudiences_B_fkey" FOREIGN KEY ("B") REFERENCES "Campaing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
