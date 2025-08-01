"use client";
import React, { useEffect, useState } from "react";

const Scripts = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const scripts = [
      "/js/jquery-3.7.1.min.js",
      "/js/bootstrap.min.js",
      "/js/validator.min.js",
      "/js/jquery.slicknav.js",
      "/js/swiper-bundle.min.js",
      "/js/jquery.waypoints.min.js",
      "/js/jquery.counterup.min.js",
      "/js/jquery.magnific-popup.min.js",
      "/js/SmoothScroll.js",
      "/js/parallaxie.js",
      "/js/gsap.min.js",
      "/js/magiccursor.js",
      "/js/SplitText.js",
      "/js/ScrollTrigger.min.js",
      "/js/jquery.mb.YTPlayer.min.js",
      "/js/wow.min.js",
      "/js/function.js",
      // "https://demo.awaikenthemes.com/assets/js/theme-panel.js",
    ];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Load in order
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    // Load scripts sequentially
    const loadAllScripts = async () => {
      try {
        for (const scriptSrc of scripts) {
          await loadScript(scriptSrc);
          console.log(`Loaded: ${scriptSrc}`);
        }
        console.log("All scripts loaded successfully");
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadAllScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [mounted]);

  return null; // This component doesn't render anything
};

export default Scripts;