import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("SuperSecret123!", 12);

  await prisma.user.upsert({
    where: { email: "you@domain.com" },
    update: {}, 
    create: {
      email: "you@domain.com",
      hashedPassword,
      name: "Platform Admin",
      role: "ADMIN",
    },
  });

  console.log("Admin user ready");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
