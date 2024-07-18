import type { LayoutParams } from "@/types/next";
import { NavBar } from "../../components/common/NavBar";
import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import { AskToSbuscribe } from "../../components/common/AskToSubscribe";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await currentUser();
  if (user) {
    return (
      <>
        <AskToSbuscribe user={user} />
        <div className="bg-[#191919]">
          <NavBar />
          {props.children}
        </div>
      </>
    );
  } else {
    redirect("/signin");
  }
}
