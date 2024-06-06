import Link from "next/link";
import Image from "next/image";
import { Layout } from "../layout/Layout";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";
import { currentUser } from "../../lib/current-user";
import { Logo } from "./Logo";
import { Button } from "../ui/button";
import { MenuResponsive } from "./MenuResponsive";
import { getCategories } from "../../actions/categories.actions";

export const NavBar = async () => {
  const user = await currentUser();
  const categoriesData = await getCategories();

  return (
    <nav className="sticky top-0 z-50 border-b bg-[#191919] p-2">
      <Layout className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="max-md:hidden">
          <a href="/products">
            <Button variant="ghost">Products</Button>
          </a>
          {categoriesData.map((c) => (
            <a
              href={`/products?categories=${c.name.replace(/ /g, "+")}`}
              key={c.id}
            >
              <Button variant="ghost">{c.name}</Button>
            </a>
          ))}
        </div>
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
          <MenuResponsive categoriesData={categoriesData} />
        </div>
      </Layout>
    </nav>
  );
};
