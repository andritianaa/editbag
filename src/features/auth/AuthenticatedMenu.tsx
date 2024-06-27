"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect, useRouter } from "next/navigation";

import {
  Bookmark,
  Download,
  LayoutDashboard,
  LogOut,
  CreditCard,
  ChevronDown,
  User,
} from "lucide-react";
import { signOut } from "next-auth/react";

import Link from "next/link";
import { Privilege } from "@prisma/client";
import { Separator } from "../../components/ui/separator";

export type UserProps = {
  id: number;
  name: string | null;
  email: string | null;
  privileges: Privilege[];
  image: string | null | undefined;
};

export const AuthenticatedMenu = (props: UserProps) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <Avatar className="size-6">
            <AvatarFallback>{props.email}</AvatarFallback>
            <AvatarImage
              src={
                props.image ??
                `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.email}`
              }
              alt={`${props.email} - profile picture`}
            />
          </Avatar>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel className="flex gap-2 font-normal">
          <Avatar className="size-6">
            <AvatarFallback>{props.email}</AvatarFallback>
            {props.image ? (
              <AvatarImage
                src={props.image}
                alt={`${props.email} - profile picture`}
              />
            ) : (
              <AvatarImage
                src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.email}`}
                alt={`${props.email} - profile picture`}
              />
            )}
          </Avatar>
          {props.email}
        </DropdownMenuLabel>
        {props.privileges &&
        (props.privileges.includes("SU") ||
          props.privileges.includes("REDACTOR")) ? (
          <Link href="/dashboard">
            <DropdownMenuItem className="flex items-center gap-3">
              <LayoutDashboard size={21} />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
        ) : (
          <></>
        )}
        <Link href="/user">
          <DropdownMenuItem className="flex items-center gap-3">
            <User size={21} />
            <span>Account</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/user/download">
          <DropdownMenuItem className="flex items-center gap-3">
            <Download size={21} />
            <span>Your download</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/user/bookmark">
          <DropdownMenuItem className="flex items-center gap-3">
            <Bookmark size={21} />
            <span>Saved product</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/user/subscription">
          <DropdownMenuItem className="flex items-center gap-3">
            <CreditCard size={21} />
            <span>Subscription</span>
          </DropdownMenuItem>
        </Link>
        <Separator />
        <DropdownMenuItem
          className="flex items-center gap-3"
          onClick={async () => {
            await signOut({ redirect: false });
            router.push("/");
          }}
        >
          <LogOut size={21} />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
