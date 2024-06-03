import type { PageParams } from "@/types/next";
import { Form } from "./Form";
import { getCategories, getSubCategories } from "@/actions/categories.actions";

export default async function RoutePage(props: PageParams<{}>) {
  const categories = await getCategories();
  const subCategories = await getSubCategories();
  return <Form categories={categories} subCategories={subCategories} />;
}
