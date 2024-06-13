/* eslint-disable @next/next/no-img-element */

import type { PageParams } from "@/types/next";
import { NavBar } from "../../../components/common/NavBar";
import { Footer } from "../../../components/common/Footer";
import AuthForm from "./AuthForm";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <NavBar />
      <section className="relative py-10 sm:py-16 lg:py-24">
        <div className="absolute inset-0"></div>

        <AuthForm />
      </section>
    </>
  );
}
