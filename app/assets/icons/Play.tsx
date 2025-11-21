import { IconProps } from '@/app/types/icon-types'
import React from 'react'

const Play: React.FC<IconProps> = ({width="40", height="40", className}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="#191a15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 4.167c8.743 0 15.833 7.088 15.833 15.833S28.743 35.833 20 35.833c-8.745 0-15.833-7.088-15.833-15.833S11.255 4.167 20 4.167"
          clipRule="evenodd"
        />
        <path
          stroke="#191a15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M25 19.992c0-1.352-6.93-5.677-7.715-4.9-.786.778-.862 8.948 0 9.799.861.854 7.715-3.547 7.715-4.9"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export default Play
