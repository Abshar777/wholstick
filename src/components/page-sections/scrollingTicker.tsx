"use client";
import Image from "next/image";

const tickerItems = [
  "personal trainers",
  "live classes",
  "outdoor & online trainers",
  "personal training",
  "live classes",
  "personal trainers",
];

const ScrollingTicker = () => {
  return (
    <div className="our-scrolling-ticker">
      {/* Scrolling Ticker Start */}
      <div className="scrolling-ticker-box">
        {[...Array(2)].map((_, index) => (
          <div className="scrolling-content" key={index}>
            {Array(2)
              .fill(tickerItems)
              .flat()
              .map((text, idx) => (
                <span
                  style={{ display: "flex" }}
                  key={idx}
                >
                  <Image
                    src="/images/star-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  {text}
                </span>
              ))}
          </div>
        ))}
      </div>
      {/* Scrolling Ticker End */}
    </div>
  );
};

export default ScrollingTicker;
