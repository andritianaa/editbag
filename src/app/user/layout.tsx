import type { LayoutParams } from "@/types/next";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";

import Link from "@/components/common/LinkActivated";
import { Button } from "@/components/ui/button";

import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  Bookmark,
  CreditCard,
  Download,
  HomeIcon,
  MenuIcon,
  Newspaper,
  SquarePen,
  User,
  UsersIcon,
} from "lucide-react";
import { currentUser } from "@/lib/current-user";
import { notFound } from "next/navigation";
import { Logo } from "../../components/common/Logo";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await currentUser();
  if (user) {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-[#191919] md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 bg-[#191919]">
            <div className="flex h-14 items-center justify-end gap-4 border-b bg-[#191919] px-4 lg:h-[60px] lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Link href="/products">
                  <Logo />
                </Link>
              </Link>
              <Button
                className="ml-auto h-8 w-8 opacity-0"
                size="icon"
                variant="outline"
              ></Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/user"
                >
                  <User className="h-4 w-4" />
                  Account
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/user/download"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/user/bookmark"
                >
                  <Bookmark className="h-4 w-4" />
                  Saved
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/user/subscription"
                >
                  <CreditCard className="h-4 w-4" />
                  Subscription
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center justify-end gap-4 border-b bg-[#191919] px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="shrink-0 md:hidden"
                  size="icon"
                  variant="outline"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col" side="left">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    className="flex items-center gap-2 text-lg font-semibold"
                    href="#"
                  >
                    <Link href="/products">
                      <Logo />
                    </Link>
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/user"
                  >
                    <User className="h-5 w-5" />
                    Account
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/user/download"
                  >
                    <Download className="h-5 w-5" />
                    Download
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/user/bookmark"
                  >
                    <Bookmark className="h-5 w-5" />
                    Saved
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/user/subscription"
                  >
                    <CreditCard className="h-4 w-4" />
                    Subscription
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex gap-2">
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
          </header>
          <div className="h-[calc(100vh-3.75rem)] overflow-y-auto">
            {props.children}
          </div>
        </div>
      </div>
    );
  } else {
    notFound();
  }
}
