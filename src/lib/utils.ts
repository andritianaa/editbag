import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTimeFormatOptions } from "intl";
import { type Subscription } from "@lemonsqueezy/lemonsqueezy.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = wordCount / wordsPerMinute;
  return Math.ceil(readingTime);
};

export const formatDateTime = (date: Date): string => {
  const dateOptions: DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const timeOptions: DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleDateString(undefined, dateOptions);
  const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

  return `${formattedDate} ${formattedTime}`;
};

export function formatPrice(priceInCents: string) {
  const price = parseFloat(priceInCents);
  const dollars = price / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // Use minimumFractionDigits to handle cases like $59.00 -> $59
    minimumFractionDigits: dollars % 1 !== 0 ? 2 : 0,
  }).format(dollars);
}

export function formatDate(date: string | number | Date | null | undefined) {
  if (!date) return "";

  return new Date(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function checkRequiredEnv() {
  if (!process.env.LEMONSQUEEZY_API_KEY) {
    throw new Error("Missing LEMONSQUEEZY_API_KEY. Set it in your .env file.");
  }

  if (!process.env.LEMONSQUEEZY_STORE_ID) {
    throw new Error("Missing LEMONSQUEEZY_STORE_ID. Set it in your .env file.");
  }

  if (!process.env.LEMONSQUEEZY_STORE_ID) {
    throw new Error("Missing LEMONSQUEEZY_API_KEY. Set it in your .env file.");
  }
}

export function isValidSubscription(
  status: Subscription["data"]["attributes"]["status"]
) {
  return status !== "cancelled" && status !== "expired" && status !== "unpaid";
}

export function takeUniqueOrThrow<T extends unknown[]>(values: T): T[number] {
  if (values.length !== 1)
    throw new Error("Found non unique or inexistent value");
  return values[0];
}

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  let formattedTime = "";

  if (mins > 0) {
    formattedTime = mins.toString().padStart(2, "0") + " min ";
  }

  formattedTime += secs.toString().padStart(2, "0") + "s";

  return formattedTime;
};

export const bitsToMegabits = (bits: number) => {
  const megabits = bits / (1024 * 1024); // 1 mégabit = 1,048,576 bits (1024 * 1024)
  return megabits.toFixed(2); // Limiter à 2 chiffres après la virgule
};
