import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaHead from "@/components/layout/metaHead";
import Indexlayout from "@/components/layout";
import ExternalScripts from "@/components/layout/externalScript";
import "@/../public/css/bootstrap.min.css";
import "@/../public/css/slicknav.min.css";
import "@/../public/css/swiper-bundle.min.css";
import "@/../public/css/all.min.css";
import "@/../public/css/animate.css";
import "@/../public/css/magnific-popup.css";
import "@/../public/css/mousecursor.css";
import "@/../public/css/custom.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wholstick",
  description: "wholstick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetaHead />
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Indexlayout>{children}</Indexlayout>
        <ExternalScripts />
      </body>
    </html>
  );
}
