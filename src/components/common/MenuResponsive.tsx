import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Logo } from "./Logo";
import {
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  Newspaper,
  UsersIcon,
} from "lucide-react";
import { Categories } from "@prisma/client";

export type MenuResponsiveProps = {};

export const MenuResponsive = (props: MenuResponsiveProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="shrink-0 md:hidden" size="icon" variant="outline">
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

          <Link href={`/about`}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              About
            </Button>
          </Link>
          <Link href={`/contact`}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Contact
            </Button>
          </Link>
          <Link href={`/#pricing`}>
            <Button variant="ghost" className="w-full justify-start text-lg">
              Pricing
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
