import { User } from "@prisma/client";
import { baseAuth } from "./auth";
import { prisma } from "../prisma";

export const currentUser = async (): Promise<User | null> => {
  const session = await baseAuth();
  if (!session) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(session.user!.id || ""),
    },
  });
  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error();
  return user;
};
