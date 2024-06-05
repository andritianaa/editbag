import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";
import { Products } from "../components/home/Products";
import { Hero } from "../components/new/Hero";
import { Footer } from "../components/common/Footer";
import { FAQ } from "../components/home/FAQ";
import { ScreenShot } from "../components/home/ScreenShot";
import { Features } from "../components/new/Features";
import { Pricing } from "../components/new/Pricing";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Products />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
