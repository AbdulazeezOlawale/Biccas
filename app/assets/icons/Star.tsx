import { IconProps } from '@/app/types/icon-types'
import React from 'react'

const Star: React.FC<IconProps> = ({width="25", height="24", fill}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          fill={fill}
          d="m12.364 0 2.918 8.983h9.446l-7.642 5.551 2.919 8.983-7.641-5.551-7.641 5.551 2.918-8.983L0 8.983h9.445z"
        />
      </svg>
    </>
  );
}

export default Star
