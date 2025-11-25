import { IconProps } from "@/app/types/icon-types";
import React from "react";

const PieChart: React.FC<IconProps> = ({ width = "30", height = "30" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 30 30"
      >
        <path
          stroke="#54bd95"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M26.512 19.863A12.5 12.5 0 1 1 10 3.538"
        />
        <path
          stroke="#54bd95"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27.5 15A12.5 12.5 0 0 0 15 2.5V15z"
        />
      </svg>
    </>
  );
};

export default PieChart;
