"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SignInAction } from "@/actions/auth.actions";

export const SigninBtn = () => {
  return (
    <form>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await SignInAction();
        }}
      >
        Sign in
      </Button>
    </form>
  );
};
