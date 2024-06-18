import type { ReactNode } from "react";

export type PageParams<T extends Record<string, string> = {}> = {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
};

export type LayoutParams<T extends Record<string, string | string[]> = {}> = {
  params: T;
  children?: ReactNode | undefined;
};

export type ErrorParams = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type SubCategory = {
  id: number;
  type: string;
  name: string;
  categoryId: number;
};

export type Category = {
  id: number;
  name: string;
  type: string;
  SubCategories: SubCategory[];
};

enum ProductTypes {
  templates = "templates",
  emoji = "emoji",
}

export type CategoryWithSubcategoriesByType = {
  [key in ProductTypes]: {
    categories: Category[];
    subCategories: Record<string, SubCategory[]>;
  };
};
