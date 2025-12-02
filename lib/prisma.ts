import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only create PrismaClient if DATABASE_URL is available
// This prevents errors during build time when DATABASE_URL might not be set
const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    // Return a mock client during build if DATABASE_URL is not set
    // This prevents build errors, but runtime will fail if DATABASE_URL is missing
    return {} as PrismaClient
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

