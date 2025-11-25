import { IconProps } from '@/app/types/icon-types'
import React from 'react'

const Activity: React.FC<IconProps> = ({width="30", height="30"}) => {
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
          d="M27.5 15h-5l-3.75 11.25-7.5-22.5L7.5 15h-5"
        />
      </svg>
    </>
  );
}

export default Activity
