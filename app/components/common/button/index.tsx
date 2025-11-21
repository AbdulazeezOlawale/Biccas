import React from 'react'

type BtnProps = {
  title: string;
  classname?: string;
};

const BiccasButton = ({title, classname}: BtnProps) => {
  return (
    <>
      <button className={`px-5 py-2.5 rounded-full common-cta-btn ${classname}`}>
        {title}
      </button>
    </>
  );
}

export default BiccasButton
