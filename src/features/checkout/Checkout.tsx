"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { axios } from "@/lib/axios";
import { CreateCheckoutResponse } from "@/app/api/payment/subscribe/route";
import { Button } from "@/components/ui/button";

export type CheckoutProps = { userId: string };

export const Checkout = (props: CheckoutProps) => {
  const handleClick = async () => {
    try {
      const { checkoutURL } = await axios.post<any, CreateCheckoutResponse>(
        "/api/payment/subscribe",
        { userId: props.userId }
      );
      window.location.href = checkoutURL;
    } catch (err) {
      //
    }
  };

  return (
    <div className="w-full max-w-md bg-white/5 border border-gray-900 p-8 rounded-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Your profile</h2>
        <Button onClick={handleClick}>Subscribe</Button>
      </div>
    </div>
  );
};
