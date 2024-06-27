"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const BackBtn = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="mb-4 flex items-center justify-center gap-2"
    >
      <ArrowLeft /> Back
    </Button>
  );
};
