import Link from "next/link";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";
import { currentUser } from "../../lib/current-user";
import { Logo } from "./Logo";
import { Button } from "../ui/button";
import { MenuResponsive } from "./MenuResponsive";
import { Input } from "../ui/input";
import { SearchInput } from "./SearchInput";

export const NavBar = async () => {
  const user = await currentUser();

  if (user) {
    return (
      <nav className="dotedNav max-w-screen sticky top-0 z-50 bg-[#191919] bg-opacity-50 p-2 py-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4">
          {/* <Link href="/" className="w-32">
            <Logo />
          </Link> */}
          <SearchInput />
          <div className="flex items-center gap-2">
            <AuthenticatedMenu
              email={user.email}
              image={user.image}
              name={user.name}
              id={user.id!}
              privileges={user.privileges}
            />
            <MenuResponsive />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="dotedNav max-w-screen sticky top-0 z-50 bg-[#191919] bg-opacity-50 p-2 py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <div className="max-md:hidden">
            <Link href={`/`}>
              <Button variant="ghost">Affiliation</Button>
            </Link>
            <Link href={`/about`}>
              <Button variant="ghost">About</Button>
            </Link>
            <Link href={`/contact`}>
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link href={`/#pricing`}>
              <Button variant="ghost">Pricing</Button>
            </Link>
          </div>
          <SigninBtn />

          <MenuResponsive />
        </div>
      </div>
    </nav>
  );
};
