"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SignInAction } from "@/actions/auth.actions";

export const SigninBtn = () => {
  return (
    <form>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await SignInAction();
        }}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="gradientBG inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <p className="px-6">Sign in</p>
        </span>
      </button>
    </form>
  );
};
