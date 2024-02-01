import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Providers } from "@/util/providers";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "PPG",
    "UNJ Pemberkasan",
    "PPG UNJ",
    "Pemberkasan UNJ",
    "Pemberkasan PPG UNJ",
  ],
  authors: [
    {
      name: "Universitas Negeri Jakarta",
      url: "https://unj.ac.id",
    },
  ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-heading antialiased select-none",
          inter.className,
          fontHeading.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
