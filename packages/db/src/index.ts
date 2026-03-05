export * from "@prisma/client";
// Explicitly export Prisma types to prevent CI build errors.
export type { UserRole } from "@prisma/client"
export { db } from './client';