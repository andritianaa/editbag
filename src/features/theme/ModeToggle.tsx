"use client";

import * as React from "react";
import { Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="px-2"
      onClick={() => {
        theme == "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      {theme == "light" ? (
        <Sun className="size-5" />
      ) : (
        <Sparkles className="size-5" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
