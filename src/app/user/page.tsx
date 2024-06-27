import type { PageParams } from "@/types/next";

import { getNewUserPercentage } from "@/actions/getters/NewUserPercentage";
import { prisma } from "@/prisma";
import { currentUser } from "@/lib/current-user";
import { EditUser } from "./EditUser";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await currentUser();
  if (user) {
    return (
      <main className="w-full p-6">
        <EditUser {...user} />
      </main>
    );
  }
}
