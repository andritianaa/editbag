"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SignInAction } from "@/actions/auth.actions";
import Link from "next/link";

export const SigninBtn = () => {
  return (
    // <form>
    //   <button
    //     onClick={async (e) => {
    //       e.preventDefault();
    //       await SignInAction();
    //     }}
    //     className="pinkButton justify-centerh-12 relative flex h-10 items-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    //   >
    //     <p className="px-6">Sign in</p>
    //   </button>
    // </form>

    <Link href="/signin">
      <button className="pinkButton justify-centerh-12 relative flex h-10 items-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <p className="px-6">Sign in</p>
      </button>
    </Link>
  );
};
