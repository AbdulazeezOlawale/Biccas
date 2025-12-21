"use client";

import { useState } from "react";


const ChoosePlan = () => {
    const [active, setActive] = useState("monthly");

  return (
    <section className="container container-space flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2>Choose Plan That’s Right For You</h2>
        <span>
          Choose plan that works best for you, feel free to contact us
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

      <div>
        <div>
            <h4>Monthly</h4>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
