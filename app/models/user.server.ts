import { User } from "@prisma/client";
import { prisma } from "~/db.server";

export const createUser = (user: Pick<User, "email" | "role">) =>
  prisma.user.create({
    data: user,
  });
