import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";
import { Hero } from "../components/home/Hero";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/products");
  }
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}
