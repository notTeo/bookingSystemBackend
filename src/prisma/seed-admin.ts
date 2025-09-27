import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const email = process.env.ADMIN_EMAIL!;
  const password = process.env.ADMIN_PASSWORD!;
  const name = process.env.ADMIN_NAME!;

  if (!email || !password || !name) {
    throw new Error("Missing admin environment variables");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {}, 
    create: {
      email,
      hashedPassword,
      name,
      role: "ADMIN",
    },
  });

  console.log("Admin user ready");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
