import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear audiencias
  const audience1 = await prisma.audience.create({
    data: {
      name: "Young Adults",
      description: "Target audience of young adults aged 18-25",
      ageFrom: 18,
      ageTo: 25,
      gender: "All",
    },
  });

  const audience2 = await prisma.audience.create({
    data: {
      name: "Professionals",
      description: "Target audience of working professionals aged 26-45",
      ageFrom: 26,
      ageTo: 45,
      gender: "All",
    },
  });

  console.log("Audiencias creadas:", [audience1, audience2]);

  // Crear preguntas
  const question1 = await prisma.question.create({
    data: {
      type: "Multiple Choice",
      question: "What is your favorite Black Friday deal?",
    },
  });

  const question2 = await prisma.question.create({
    data: {
      type: "Open Ended",
      question: "How can we improve your shopping experience?",
    },
  });

  console.log("Preguntas creadas:", [question1, question2]);

  // Crear campaña con relaciones a audiencias y guardar IDs de preguntas
  const campaign = await prisma.campaing.create({
    data: {
      name: "Black Friday Sale",
      url: "https://example.com/black-friday",
      audiences: {
        connect: [{ id: audience1.id }, { id: audience2.id }],
      },
      questions: {
        connect: [{ id: question1.id }, { id: question2.id }],
      },
      questionIDs: [question1.id, question2.id],
    },
  });

  console.log("Campaña creada:", campaign);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
