"use server";
import { Categories, SubCategories } from "@prisma/client";
import { prisma } from "../prisma";
import { CategoryWithSubcategoriesByType } from "../types/next";

export const createCategory = async (name: string, type: string) => {
  // Vérifier si la catégorie existe déjà
  console.log("name ==> ", name);
  console.log("type ==> ", type);

  const existingCategory = await prisma.categories.findFirst({
    where: {
      name,
      type,
    },
  });

  // Si la catégorie existe déjà, ne rien faire
  if (existingCategory) {
    return;
  }

  // Si la catégorie n'existe pas, la créer
  await prisma.categories.create({
    data: {
      name,
      type,
    },
  });
};

export const getCategories = async (): Promise<Categories[]> => {
  return prisma.categories.findMany();
};

export const createSubCategory = async (
  name: string,
  type: string,
  categoryName: string
) => {
  console.log("name ==> ", name);
  console.log("type ==> ", type);
  console.log("categoryName ==> ", categoryName);

  if (type && categoryName) {
    const category = await prisma.categories.findFirst({
      where: {
        name: categoryName,
        type,
      },
    });

    if (!category) {
      throw new Error(
        `Category with name "${categoryName}" and type "${type}" not found.`
      );
    }

    const existingSubCategory = await prisma.subCategories.findFirst({
      where: {
        name,
        type,
        categoryId: category.id,
      },
    });

    if (!existingSubCategory) {
      console.log(category.id);

      await prisma.subCategories.create({
        data: {
          name,
          type,
          categoryId: category.id,
        },
      });
    }
  } else {
    throw new Error(`Please select a category first`);
  }
};

export const getSubCategories = async (): Promise<SubCategories[]> => {
  return prisma.subCategories.findMany();
};

export const getCategoriesWithSubcategories =
  async (): Promise<CategoryWithSubcategoriesByType> => {
    const productTypes: string[] = ["templates", "emoji"]; // Add other types as needed

    // Initialize the result object with the product types
    const result: CategoryWithSubcategoriesByType = {
      templates: { categories: [], subCategories: {} },
      emoji: { categories: [], subCategories: {} },
    };

    for (const productType of productTypes) {
      const categories = await prisma.categories.findMany({
        where: {
          type: productType,
        },
        include: {
          SubCategories: true,
        },
      });

      const subCategoryGroups = categories.reduce((acc, category) => {
        acc[category.name] = category.SubCategories;
        return acc;
      }, {} as Record<string, SubCategories[]>);

      result[productType] = {
        categories: categories,
        subCategories: subCategoryGroups,
      };
    }

    return result;
  };
