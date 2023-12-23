import { PrismaClient } from "@prisma/client";

declare global { // <-- declare global
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient(); // <-- use global

if (process.env.NODE_ENV !== "production") global.prisma = db; // <-- set global

