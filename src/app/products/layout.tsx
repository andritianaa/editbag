import type { LayoutParams } from "@/types/next";
import { NavBar } from "../../components/common/NavBar";

export default async function RouteLayout(props: LayoutParams<{  }>) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}