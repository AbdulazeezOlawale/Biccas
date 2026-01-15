import CurrencyStack from "@/app/assets/icons/CurrencyStack";
import Play from "@/app/assets/icons/Play";
import {
  ArrowBigLeft,
  ArrowBigRightDash,
  Dot,
  MoveRight,
  Quote,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import BiccasButton from "../common/BiccasButton";
import Logo from "@/app/assets/icons/logo";
import Link from "next/link";

const Footer = () => {
  const testimonialsImage = [
    "/images/testi-1.png",
    "/images/testi-2.png",
    "/images/testi-3.png",
    "/images/testi-4.png",
  ];

  const footerLinks = [
    {
      header: "Support",
      body: ["Help centre", "Account information", "About", "Contact us"],
    },
    {
      header: "Help and Solution",
      body: [
        "Talk to support",
        "Support docs",
        "System status",
        "Covid responde",
      ],
    },
    {
      header: "Product",
      body: ["Update", "Security", "Beta test", "Pricing product"],
    },
  ];

  // this gets the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#161C28] flex flex-col gap-10">
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

              <BiccasButton
                title="Request Demo"
                classname="rounded-md! w-full"
              />
            </form>
          </div>
        </div>
      </section>

      <section className="container container-space flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-between">
            <Logo />
            <p>Get started now try our product</p>

            <div className="border border-white w-[410px] flex flex-row rounded-full overflow-hidden relative">
              <input
                type="text"
                placeholder="Enter your email here"
                className="placeholder:text-lg placeholder:text-(--text-gray) py-4 indent-4 w-full h-full text-white pr-[56px]"
              />
              <div className="absolute top-[50%] -translate-[50%] -right-4.5">
                <button className="bg-(--primary-color) size-12 rounded-full flex items-center justify-center border border-transparent hover:bg-transparent hover:border hover:border-(--primary-color) transition-all ease-in-out cursor-pointer">
                  <MoveRight className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <span className="text-white text-lg">{item.header}</span>
                <ul className="flex flex-col gap-3">
                  {item.body.map((footerBodyItem, index) => (
                    <li
                      key={index}
                      className="list-none text-(--text-gray) hover:text-white transition-all ease-in-out"
                    >
                      <Link href="#">{footerBodyItem}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <section className="flex flex-row items-center justify-between translate-y-8">
          <p className="text-white">
            &copy; {currentYear} Biccas Inc. Copyright and rights reserved
          </p>
          <div className="flex flex-row gap-2 text-white">
            <span>Terms and Condtions</span>
            <Dot className="text-(--text-gray)" />
            <span>Privacy Policy</span>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
