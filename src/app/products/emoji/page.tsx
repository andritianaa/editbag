import type { PageParams } from "@/types/next";
import { getPost } from "@/actions/getters/post.get";
import { Content } from "./content";
import { getCategories, getSubCategories } from "@/actions/categories.actions";
export default async function RoutePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = await getPost();
  const categoriesData = await getCategories();
  const subCategoriesData = await getSubCategories();

  const categories =
    typeof searchParams?.categories === "string"
      ? searchParams.categories.split(",")
      : [];
  const subCategories =
    typeof searchParams?.subCategories === "string"
      ? searchParams.subCategories.split(",")
      : [];
  const search: string = (searchParams?.search as string) || "";

  return (
    <Content
      products={products}
      categories={categoriesData}
      subCategories={subCategoriesData}
      currentCategories={categories}
      currentSubCategories={subCategories}
      currentSearch={search}
    />
  );
}
