// NumberSVGComponent.tsx

import React from "react";

const NumberSVGComponent = ({ numberPathData }) => {
  return (
    <svg
      width="40"
      height="140"
      viewBox="0 0 40 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="19.2" width="1" height="100" fill="url(#paint0_linear_0_1)" />
      <rect
        y="100"
        width="40"
        height="40"
        rx="20"
        fill="url(#paint1_linear_0_1)"
      />
      <path d={numberPathData} fill="black" />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="19"
          y1="4.24235e-07"
          x2="19.9998"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.845839" stopColor="#8856B8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="0"
          y1="120"
          x2="40"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6820B0" />
          <stop offset="1" stopColor="#8856B8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NumberSVGComponent;
