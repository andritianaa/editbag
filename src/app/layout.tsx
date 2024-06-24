import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import AuthContext from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editbag: Download video assets",
  description: `Everything you need for stunning video creation`,
  openGraph: {
    title: "Editbag: Download video assets",
    description: `Everything you need for stunning video creation`,
    url: "https://editbag.com",
    siteName: "Editbag",
    images: [
      {
        url: "https://editbag.com/preview.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://editbag.com/preview.png",
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
      <body
        className={cn(
          "min-h-screen bg-[#1b1b1b] relative custom-bg",
          inter.className
        )}
      >
        <AuthContext>
          <Providers>
            <NextTopLoader showSpinner={false} color="#ffffff" />
            {children}
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
