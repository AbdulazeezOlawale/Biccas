import React from "react";

interface PartnerIconProps {
  icon: React.FC;
}

const PartnerIcon = ({ icon: Icon }: PartnerIconProps) => {
  return (
    <div className="scale-85 sm:scale-100">
      <Icon />
    </div>
  );
};

export default PartnerIcon;
