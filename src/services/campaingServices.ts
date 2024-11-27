import { Campaing, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async () => {
  try {
    return await prisma.campaing.findMany({
      include: {
        questions: { select: { question: true } },
      },
    });
  } catch {
    throw new Error("Failed to fetch campaigns");
  }
};
export const insert = async (data: Campaing) => {
  try {
    return await prisma.campaing.create({ data });
  } catch {
    throw new Error("Failed to create campaign");
  }
};
