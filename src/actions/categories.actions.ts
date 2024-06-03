"use server";
import { Categories, SubCategories } from "@prisma/client";
import { prisma } from "../prisma";

export const createCategory = async (name: string) => {
  await prisma.categories.create({
    data: {
      name,
    },
  });
};

export const getCategories = async (): Promise<Categories[]> => {
  return prisma.categories.findMany();
};

export const createSubCategory = async (name: string) => {
  await prisma.subCategories.create({
    data: {
      name,
    },
  });
};

export const getSubCategories = async (): Promise<SubCategories[]> => {
  return prisma.subCategories.findMany();
};
