"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Toaster } from "sonner";
import PreLoader from "./preLoader";
import Header from "./header";
import ExternalScripts from "./externalScript";
import Footer from "./footer";

const Indexlayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div suppressHydrationWarning className="w-full h-full">
      <Toaster position="top-center" />
      <PreLoader />
      {/* <Cursor /> */}
      <Header />

      <Suspense fallback={<div></div>}>{children}</Suspense>
      <Footer />

      {/* <Footer /> */}
    </div>
  );
};

export default Indexlayout;
