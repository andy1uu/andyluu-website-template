import React from "react";

import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Andy Luu's Personal Portfolio Website",
  description:
    "This is a personal portfolio website for Andy Luu to show off his accomplishments.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className="light">
    <body className={rubik.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="flex min-h-screen w-full overflow-x-hidden overflow-y-auto">
          <div className="bg-light dark:bg-dark text-dark dark:text-light flex w-full flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
