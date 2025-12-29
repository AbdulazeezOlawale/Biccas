import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const benefitsData = [
    {
      text: "Free Consulting With Experet Saving Money",
    },
    {
      text: "Online Banking",
    },
    {
      text: "Investment Report Every Month",
    },
    {
      text: "Saving Money For The Future",
    },
    {
      text: "Online Transection",
    },
  ];

  return (
    <section className="container container-space flex flex-col md:flex-row gap-16 justify-between">
      <div className="flex flex-col gap-6 justify-center">
        <h2>What Benifit Will You Get</h2>

        <ul className="flex flex-col gap-4">
          {benefitsData.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="h-7 w-7 flex items-center justify-center bg-(--primary-color-light) text-white rounded-full">
                <Check className="scale-75" />
              </span>
              <p className="text-black!">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full w-full overflow-hidden">
        <Image
          src="/images/hero-desktop.png"
          alt="Hero"
          width={1404}
          height={118}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default Benefits;
