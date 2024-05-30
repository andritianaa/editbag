import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editbag: Let's Build faster",
  description: `Editbag is a boilerplate project based on Next.js, a React framework. It provides a starting point for building web applications with modern tooling and best practices.`,
  openGraph: {
    title: "Editbag: Let's Build faster",
    description: `Editbag is a boilerplate project based on Next.js, a React framework. It provides a starting point for building web applications with modern tooling and best practices.`,
    url: "https://editbag.vercel.app",
    siteName: "Editbag",
    images: [
      {
        url: "https://editbag.vercel.app/preview.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://editbag.vercel.app/preview.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <Providers>
          <NextTopLoader showSpinner={false} color="#fbc466" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
