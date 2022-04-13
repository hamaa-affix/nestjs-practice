import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const mami = await prisma.user.upsert({
    where: { email: 'mami@prisma.io' },
    update: {},
    create: {
      first_name: 'mami',
      last_name: 'hamada',
      age: 32,
      tel: '000-1111-4444',
      email: 'mami@prisma.io',
      password: await bcrypt.hash('hogehoge', 10),
    },
  });

  const kotoha = await prisma.user.upsert({
    where: { email: 'kotoha@prisma.io' },
    update: {},
    create: {
      first_name: 'kotoha',
      last_name: 'hamada',
      age: 32,
      tel: '000-9999-4444',
      email: 'kotoha@prisma.io',
      password: await bcrypt.hash('hogehoge', 10),
    },
  });
  console.log({ mami, kotoha });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
