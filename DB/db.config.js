// To hit any query or create any query we use this @prisma/client

//* This class is the main entry point for interacting with your database using Prisma.
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  //* It enables logging of SQL queries for debugging or performance monitoring.

  log: ["query"],
}).$extends(withAccelerate());
  
//* It enables logging of SQL queries for debugging or performance monitoring.
export default prisma;
