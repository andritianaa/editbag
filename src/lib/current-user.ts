import { User } from "@prisma/client";
import { authOptions } from "./auth";
import { prisma } from "../prisma";
import { getServerSession } from "next-auth";

export const currentUser = async (): Promise<User | null> => {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email || "",
    },
  });
  return user;
};

export const requiredCurrentUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error();
  return user;
};
