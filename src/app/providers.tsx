"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/sonner";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {props.children}
    </QueryClientProvider>
  );
};
