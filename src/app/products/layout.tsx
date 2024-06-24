import type { LayoutParams } from "@/types/next";
import { NavBar } from "../../components/common/NavBar";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="bg-[#191919]">
      <NavBar />
      {props.children}
    </div>
  );
}
