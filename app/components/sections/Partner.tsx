import React from 'react'
import Unsplash from "@/app/assets/icons/Unsplash";
import Notion from "@/app/assets/icons/Notion";
import Intercom from "@/app/assets/icons/Intercom";
import Descript from "@/app/assets/icons/Descript";
import Grammarly from "@/app/assets/icons/Grammarly";
import PartnerIcon from '../common/PartnerIcon';

const Partner = () => {

    
  type partnerType = {
    Component: React.FC;
    id: string;
  };

  const partnerComponents: partnerType[] = [
    { Component: Unsplash, id: "unsplash" },
    { Component: Notion, id: "notion" },
    { Component: Intercom, id: "intercom" },
    { Component: Descript, id: "descript" },
    { Component: Grammarly, id: "grammarly" },
  ];

  return (
    <div className="container-space container">
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <h3 className='text-center lg:text-left'>More than 25,000 teams use Collabs</h3>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-3.5 sm:gap-8">
          {partnerComponents.map((item: partnerType) => (
            <PartnerIcon icon={item.Component} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner
