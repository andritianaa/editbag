import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { DateTimeFormatOptions } from "intl"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length;
  const readingTime = wordCount / wordsPerMinute;
  return Math.ceil(readingTime);
}


export const formatDateTime = (date: Date): string => {
  const dateOptions: DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeOptions: DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };

  const formattedDate = date.toLocaleDateString(undefined, dateOptions);
  const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

  return `${formattedDate} ${formattedTime}`;
}
