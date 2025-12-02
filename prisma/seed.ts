import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hopeline.com' },
    update: {},
    create: {
      email: 'admin@hopeline.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('Created admin user:', admin.email)

  // Create therapist user
  const therapistPassword = await bcrypt.hash('therapist123', 10)
  const therapist = await prisma.user.upsert({
    where: { email: 'therapist@hopeline.com' },
    update: {},
    create: {
      email: 'therapist@hopeline.com',
      password: therapistPassword,
      name: 'Therapist User',
      role: 'THERAPIST',
    },
  })

  console.log('Created therapist user:', therapist.email)

  // Create front desk user
  const frontDeskPassword = await bcrypt.hash('frontdesk123', 10)
  const frontDesk = await prisma.user.upsert({
    where: { email: 'frontdesk@hopeline.com' },
    update: {},
    create: {
      email: 'frontdesk@hopeline.com',
      password: frontDeskPassword,
      name: 'Front Desk User',
      role: 'FRONT_DESK',
    },
  })

  console.log('Created front desk user:', frontDesk.email)

  console.log('Seeding completed!')
  console.log('\nDefault login credentials:')
  console.log('Admin: admin@hopeline.com / admin123')
  console.log('Therapist: therapist@hopeline.com / therapist123')
  console.log('Front Desk: frontdesk@hopeline.com / frontdesk123')
  console.log('\n⚠️  IMPORTANT: Change these passwords immediately in production!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

