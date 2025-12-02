"use client";

import Logo from "@/app/assets/icons/logo";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type navBarProps = {
  navStyles: string;
};

type LinkItem = {
  title: string;
  isActive: boolean;
};

const Navbar = ({ navStyles }: navBarProps) => {
  const [openModal, setOpenModal] = useState(false);

  const linkItems: LinkItem[] = [
    {
      title: "Home",
      isActive: true,
    },
    {
      title: "Product",
      isActive: false,
    },
    {
      title: "FAQ",
      isActive: false,
    },
    {
      title: "Blog",
      isActive: false,
    },
    {
      title: "About Us",
      isActive: false,
    },
  ];

  return (
    <div className="relative">
      <nav
        className={`container flex flex-row items-center justify-between flex-1 py-5 px-3 nav-glass-card ${navStyles}`}
      >
        <div className="logo cursor-pointer">
          <Logo />
        </div>

        <div
          className="flex md:hidden"
          onClick={() => {
            setOpenModal(!openModal);
            console.log("is clicked");
          }}
        >
          <TextAlignJustify />
        </div>

        <div className=" flex-row items-center justify-between flex-1 hidden md:flex">
          <ul className="flex flex-row items-center justify-center flex-1">
            {linkItems.map((link: LinkItem, index: number) => (
              <li key={index} className="mx-0.5">
                <Link
                  href="#"
                  className={`px-4 text-[16px] transition-all ${
                    link.isActive
                      ? "text-(--text-black)"
                      : "text-(--text-gray) hover:text-(--text-black)"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="auth-btns flex flex-row gap-1">
            <li>
              <Link
                href="#"
                className="px-4 text-(--text-gray) text-[16px] hover:text-(--text-black) transition-all"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="px-4 py-2 rounded-[10px] common-cta-btn"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed z-50 top-28 left-[50%] translate-x-[-50%] container nav-glass-card md:hidden rounded-[22px] py-5 px-3 ${
          openModal === true ? "open-modal" : "close-modal"
        }`}
        style={{ background: "white" }}
      >
        <ul className="flex flex-col items-start justify-center flex-1">
          {linkItems.map((link: LinkItem, index: number) => (
            <li
              key={index}
              className="hover:bg-(--foreground) transition-colors w-full py-2 mb-1 last:mb-0 rounded-lg "
            >
              <Link
                href="#"
                className={`px-4 text-[16px] transition-all text-(--text-black)`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="auth-btns flex flex-col gap-1 w-full">
          <li className="hover:bg-(--foreground) transition-colors w-full py-2 mb-1 last:mb-0 rounded-lg ">
            <Link
              href="#"
              className={`px-4 text-[16px] transition-all text-(--text-black)`}
            >
              Login
            </Link>
          </li>
          <li className="border-t border-(--foreground) pt-2 w-full flex">
            <Link href="#" className="px-4 py-2 rounded-[10px] common-cta-btn w-full">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
