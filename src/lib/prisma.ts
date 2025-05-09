import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

/**
 * Extends the global scope with a custom property `prismaGlobal` to store a singleton instance
 * of the Prisma client. This ensures that the Prisma client is reused across the application,
 * avoiding the creation of multiple instances which can lead to performance issues or connection
 * pool exhaustion.
 *
 * @property prismaGlobal - A singleton instance of the Prisma client, created using the
 * `prismaClientSingleton` factory function.
 *
 * Note:
 * - This declaration merges with the existing `global` type to add the `prismaGlobal` property.
 * - The `prismaClientSingleton` function must be defined elsewhere in the codebase and is
 * responsible for creating or retrieving the Prisma client instance.
 */
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma   