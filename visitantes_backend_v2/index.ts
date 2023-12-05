import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.visitors.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });

  const allUsers = await prisma.visitors.findMany();
  console.dir(allUsers, { depth: null });
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
