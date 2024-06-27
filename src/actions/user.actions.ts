"use server";
import bcrypt from "bcrypt";
import { currentUser } from "@/lib/current-user";
import { prisma } from "@/prisma";

export const editUserName = async (newName: string) => {
  const user = await currentUser();
  if (user) {
    await prisma.user
      .update({
        where: {
          id: user.id,
        },
        data: {
          name: newName,
        },
      })
      .catch((e) => {
        throw new Error("Error while updating name");
      });
  } else {
    throw new Error("You are not connected.");
  }
  return;
};

export const editPassword = async (
  currentPass: string | null,
  newPass: string
) => {
  const user = await currentUser();

  if (currentPass) {
    currentPass = await bcrypt.hash(currentPass, 12);
  }

  newPass = await bcrypt.hash(newPass, 12);

  if (user) {
    const userData = await prisma.user.findFirst({
      where: {
        id: user.id,
        hashedPassword: currentPass,
      },
    });
    if (userData) {
      await prisma.user
        .update({
          where: {
            id: user.id,
            hashedPassword: currentPass,
          },
          data: {
            hashedPassword: newPass,
          },
        })
        .catch((e) => {
          throw new Error("Error while updating password");
        });
    } else {
      throw new Error("Wrong current password");
    }
  } else {
    throw new Error("You are not connected.");
  }
  return;
};
