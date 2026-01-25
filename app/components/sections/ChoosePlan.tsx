"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const ChoosePlan = () => {
  const [active, setActive] = useState("monthly");
  const [hover, setHover] = useState<number | null>(null);

  const planData = [
    {
      header: "Free",
      desc: "Have a go and test your superpowers",
      price: 0,
      itemList: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      buttonText: "Signup for free",
    },
    {
      header: "Pro",
      desc: "Experiment the power of infinite possibilities",
      price: 8,
      itemList: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      buttonText: "Go to pro",
    },
    {
      header: "Business",
      desc: "Unveil new superpowers and join the Design League",
      price: 16,
      itemList: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon",
      ],
      buttonText: "Go to Business",
    },
  ];

  return (
    <section className="container container-space flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2>Choose A Plan That’s Right For You</h2>
        <span className="text-center md:text-left">
          Choose a plan that works best for you, feel free to contact us
        </span>
      </div>

      <div
        className="relative flex flex-row items-center bg-gray-100 rounded-xl p-1 shadow-inner cursor-pointer"
        onClick={() => setActive(active === "monthly" ? "annually" : "monthly")}
      >
        <div
          className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out z-0
            ${active === "annually" ? "translate-x-full" : "translate-x-0"}`}
        />

        <button
          className={`relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-300 rounded-lg
            ${active === "monthly" ? "text-blue-600" : "text-gray-500"}`}
          onClick={(e) => {
            e.stopPropagation();
            setActive("monthly");
          }}
        >
          Bill Monthly
        </button>

        <button
          className={`relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-300 rounded-lg
            ${active === "annually" ? "text-blue-600" : "text-gray-500"}`}
          onClick={(e) => {
            e.stopPropagation();
            setActive("annually");
          }}
        >
          Bill Annually
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {planData.map((planItem, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 flex-1 shadow-lg inset-shadow-2xs p-5 rounded-[20px] transition-all duration-300 ease-in-out justify-between ${
              hover === index
                ? "scale-105 shadow-xl z-10 transition-all duration-300 ease-in-out"
                : ""
            } ${
              hover !== null && hover !== index
                ? "scale-95 opacity-60 transition-all duration-300 ease-in-out"
                : ""
            }`}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex flex-col gap-4 items-center text-center">
              <h4>{planItem.header}</h4>
              <p>{planItem.desc}</p>
              <div className="flex flex-row gap-0">
                <sup>$</sup>
                <span className="text-3xl">{planItem.price}</span>
              </div>
            </div>

            <div className="flex flex-col justify-baseline gap-3 bg-[#F9FAFB] p-9 rounded-[10px] shadow-inner">
              {planItem.itemList.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="h-6 w-6 flex items-center justify-center bg-(--primary-color-light) text-white rounded-full">
                    <Check className="scale-75" />
                  </span>
                  <p className="text-black!">{item}</p>
                </li>
              ))}

              <button className="px-6 py-3 bg-white shadow-md rounded-[10px] capitalize text-[16px] text-(--primary-color) hover:text-white hover:bg-(--primary-color-light) transition-all duration-300 cursor-pointer ease-in-out">
                {planItem.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChoosePlan;
