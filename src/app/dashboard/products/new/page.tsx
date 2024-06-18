import type { PageParams } from "@/types/next";
import { Form } from "./Form";
import { getCategoriesWithSubcategories } from "@/actions/categories.actions";

export default async function RoutePage(props: PageParams<{}>) {
  const categories = await getCategoriesWithSubcategories();
  return <Form categories={categories} />;
}
