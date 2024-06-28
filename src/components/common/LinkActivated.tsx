"use client";
import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type LinkActivatedProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link = (props: LinkActivatedProps) => {
  const currentPath = usePathname();
  return (
    <NextLink
      href={props.href}
      className={cn(
        currentPath === `${props.href}`
          ? "bg-gray-700 text-[#ffffff]"
          : "text-muted-foreground",
        props.className
      )}
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
