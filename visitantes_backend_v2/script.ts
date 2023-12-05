import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const a = await prisma.appointment.create({
    data: {
      date: new Date(),
      service: "sim",
      value: "100",
      userId: 1,
    },
  });

  console.log(a);

  return a;
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
