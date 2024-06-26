import { Footer } from "@/components/common/Footer";
import { Content } from "./content";
export default async function RoutePage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Content />
      <Footer />
    </>
  );
}
