"use client";
import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        display: visible ? "fle" : "none",
      }}
      className="preloader"
    >
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/loader.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
