import { IconProps } from '@/app/types/icon-types'
import React from 'react'

const Command: React.FC<IconProps> = ({width="30", height="30"}) => {
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
          d="M22.5 3.75a3.75 3.75 0 0 0-3.75 3.75v15a3.75 3.75 0 1 0 3.75-3.75h-15a3.75 3.75 0 1 0 3.75 3.75v-15a3.75 3.75 0 1 0-3.75 3.75h15a3.75 3.75 0 0 0 0-7.5"
        />
      </svg>
    </>
  );
}

export default Command
