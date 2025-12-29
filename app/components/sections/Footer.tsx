import CurrencyStack from "@/app/assets/icons/CurrencyStack";
import Play from "@/app/assets/icons/Play";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import BiccasButton from "../common/BiccasButton";

const Footer = () => {
  const testimonialsImage = [
    "/images/testi-1.png",
    "/images/testi-2.png",
    "/images/testi-3.png",
    "/images/testi-4.png",
  ];

  return (
    <footer className="bg-[#161C28] ">
      <section className="container container-space">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-white!">
              What people are saying about{" "}
              <span className="text-(--primary-color)">Biccas</span>
            </h3>
            <p>
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <Quote className="text-white size-16" />
            <p>
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <small className="text-white">_ Aria Zinanrio</small>

            <div className="flex items-center gap-3">
              {testimonialsImage.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item}
                    alt={`Testimonial image ${index + 1}`}
                    height={40}
                    width={40}
                  />
                </div>
              ))}
              <Play stroke="#ffffff" />
            </div>
          </div>

          <div className="bg-[#222938] rounded-md flex flex-col items-center p-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <CurrencyStack />
              <span className="text-white">Get Started</span>
            </div>

            <form action="" className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[18px] text-white">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  id="email"
                  className="bg-white w-full py-3 rounded-md indent-4"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[18px] text-white">
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  placeholder="Message Us"
                  className="bg-white py-3 indent-4 rounded-md"
                  rows={2}
                ></textarea>
              </div>

              <BiccasButton title="Request Demo" classname="rounded-md! w-full" />
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
