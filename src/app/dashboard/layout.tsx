import type { LayoutParams } from "@/types/next";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";

import Link from "@/components/common/LinkActivated";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  BellIcon,
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  Newspaper,
  SquarePen,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { currentUser } from "@/lib/current-user";
import { notFound } from "next/navigation";
import { Logo } from "../../components/common/Logo";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await currentUser();
  if (user) {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 bg-white dark:bg-[#020817] md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 bg-white dark:bg-[#020817]">
            <div className="flex h-14 items-center justify-end gap-4 border-b bg-muted/40 bg-white px-4 dark:bg-[#020817] lg:h-[60px] lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Link href="/">
                  <Logo />
                </Link>
              </Link>
              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/dashboard"
                >
                  <HomeIcon className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/dashboard/analytics"
                >
                  <LineChartIcon className="h-4 w-4" />
                  Analytics
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/dashboard/users"
                >
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/dashboard/products"
                >
                  <Newspaper className="h-4 w-4" />
                  Products
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-[#fbc466]"
                  href="/dashboard/products/new"
                >
                  <SquarePen className="h-4 w-4" />
                  New product
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center justify-end gap-4 border-b bg-white px-4 dark:bg-[#020817] lg:h-[60px] lg:px-6">
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
                    <Link href="/">
                      <Logo />
                    </Link>
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/dashboard"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/dashboard/analytics"
                  >
                    <LineChartIcon className="h-5 w-5" />
                    Analytics
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/dashboard/users"
                  >
                    <UsersIcon className="h-5 w-5" />
                    Users
                  </Link>

                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/dashboard/products"
                  >
                    <Newspaper className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                    href="/dashboard/products/new"
                  >
                    <Newspaper className="h-5 w-5" />
                    New product
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
