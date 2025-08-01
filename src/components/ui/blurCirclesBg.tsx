import React from "react";

const BlurCirclesBg = () => {
  return (
    <>
      <div className="absolute w-40 scale-125 h-40 bottom-0 left-0 bg-orange-500 blur-3xl opacity-10"></div>
      <div className="absolute w-40 scale-125 h-40 top-0 right-0 bg-orange-500 blur-3xl opacity-10"></div>
    </>
  );
};

export default BlurCirclesBg;
