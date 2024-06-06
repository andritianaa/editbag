import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";
import { Products } from "../components/home/Products";
import { Hero } from "../components/home/Hero";
import { Footer } from "../components/common/Footer";
import { FAQ } from "../components/home/FAQ";
import { ScreenShot } from "../components/home/ScreenShot";
import { Pricing } from "../components/new/Pricing";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <NavBar />
      <Hero />
      <FAQ />
      <Footer />
    </>
  );
}
