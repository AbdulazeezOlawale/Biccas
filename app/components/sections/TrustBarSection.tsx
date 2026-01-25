import Activity from "@/app/assets/icons/Activity";
import Command from "@/app/assets/icons/Command";
import PieChart from "@/app/assets/icons/PieChart";
import Star from "@/app/assets/icons/Star";
import React, { JSX } from "react";

const TrustBarSection = () => {
  type ratingDataType = {
    rating: number;
    type: string;
  };

  type descDataType = {
    icon: JSX.Element;
    heading: string;
    para: string;
  };

  const ratingData: ratingDataType[] = [
    {
      rating: 4.9,
      type: "Data Bricks",
    },
    {
      rating: 4.8,
      type: "Chain Analysis",
    },
  ];

  const descData: descDataType[] = [
    {
      icon: <Activity />,
      heading: "Publishing",
      para: "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
    },
    {
      icon: <PieChart />,
      heading: "Analytics",
      para: "Analyze your performance and create goegeous report",
    },
    {
      icon: <Command />,
      heading: "Engagement",
      para: "Quiuckly navigate you anda engage with your adience",
    },
  ];

  const RatingDisplay = ({
    rating,
    maxStars = 5,
  }: {
    rating: number;
    maxStars: number;
  }) => {
    const filledCount = Math.floor(rating);
    const emptyCount = maxStars - filledCount;

    return (
      <div className="flex gap-1">
        {Array(filledCount)
          .fill(null)
          .map((_, i) => (
            <Star key={i} fill="#FFC728" />
          ))}

        {Array(emptyCount)
          .fill(null)
          .map((_, i) => (
            <Star key={i + filledCount + 1} fill="#BBBBBB" />
          ))}
      </div>
    );
  };

  return (
    <section className="bg-[#F9F8FE] container-space">
      <div className="container flex flex-col md:flex-row gap-16 ">
        <div className="flex flex-col gap-10 flex-1">
          <div className="flex flex-col gap-6">
            <h2>How we support our partner all over the world</h2>
            <p className="mobile-paragraph">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-16">
            {ratingData.map((item: ratingDataType, index) => {
              return (
                <div key={index} className="flex items-center flex-col justify-center">
                  <span className="flex gap-2 mb-4">
                    <RatingDisplay maxStars={5} rating={item.rating} />
                  </span>

                  <div className="text-(--default-font-size)">
                    <strong className="">{item.rating}</strong>/5 rating
                  </div>
                  <p>{item.type}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          {descData.map((item: descDataType, index) => (
            <div key={index} className="relative flex gap-3">
              <div className="absolute top-0 p-3 rounded-.5 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)]">
                {item.icon}
              </div>

              <div className="pl-[calc(54px+25px)] flex flex-col gap-2.5">
                <h4>{item.heading}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
