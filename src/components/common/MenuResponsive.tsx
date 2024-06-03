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

export type MenuResponsiveProps = {
  categoriesData: Categories[];
};

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
          <a href="/products">
            <Button variant="ghost" className="w-full justify-start text-lg">
              Products
            </Button>
          </a>

          {props.categoriesData.slice(0, 4).map((c) => (
            <a
              href={`/products?categories=${c.name.replace(/ /g, "+")}`}
              key={c.id}
            >
              <Button variant="ghost" className="w-full justify-start text-lg">
                {c.name}
              </Button>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
