import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Check if database is configured
export function isDatabaseConfigured() {
  return !!process.env.DATABASE_URL;
}

// Helper to ensure database is available
export async function ensureDatabase() {
  if (!isDatabaseConfigured()) {
    throw new Error(
      'Database is not configured. Please add a database by clicking "+ Database" in Railway and set the DATABASE_URL environment variable.'
    );
  }
}
