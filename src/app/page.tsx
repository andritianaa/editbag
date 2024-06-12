import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";
import { Hero } from "../components/home/Hero";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}
