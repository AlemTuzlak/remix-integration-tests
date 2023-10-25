import { User } from "@prisma/client";
import { createUser } from "~/models/user.server";
import { faker } from "@faker-js/faker";

export const createNormalUser = (user?: Omit<User, "id">) => {
  return createUser({
    email: faker.internet.email().toLowerCase(),
    role: "USER",
    ...user,
  });
};

export const createAdminUser = (user?: Omit<User, "id">) => {
  return createUser({
    email: faker.internet.email().toLowerCase(),
    role: "ADMIN",
    ...user,
  });
};
