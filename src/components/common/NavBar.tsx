import Link from "next/link";
import Image from "next/image";
import { Layout } from "../layout/Layout";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";
import { currentUser } from "../../lib/current-user";
import { Logo } from "./Logo";

export const NavBar = async () => {
  const user = await currentUser();
  return (
    <nav className="sticky top-0 z-50 border-b bg-white p-2 dark:bg-[#020817]">
      <Layout className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2">
          {!user && <SigninBtn />}
          {user && (
            <AuthenticatedMenu
              email={user.email}
              image={user.image}
              name={user.name}
              id={user.id!}
              privileges={user.privileges}
            />
          )}
        </div>
      </Layout>
    </nav>
  );
};
