import { Content } from "./content";
import { Suspense } from "react";
export default async function RoutePage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<div></div>}>
      <Content />
    </Suspense>
  );
}
