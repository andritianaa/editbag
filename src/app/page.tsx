import { SpotlightHero } from "@/components/home/SpotLight";
import { Tools } from "@/components/home/Tools";
import Pricing from "../components/home/Pricing";
import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";
import { Products } from "../components/home/Products";
import { Hero } from "../components/home/Hero";
import { Footer } from "../components/common/Footer";
import { FAQ } from "../components/home/FAQ";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <NavBar />
      <Hero />
      <Products />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
