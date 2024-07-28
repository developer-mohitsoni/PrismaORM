// To hit any query or create any query we use this @prisma/client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  //* to see what the query hit we use something "log"
  log: ["query"],
});

export default prisma;
