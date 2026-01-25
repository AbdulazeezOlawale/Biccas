"use client";

import Logo from "@/app/assets/icons/logo";
import { useScrollStore } from "@/app/store/ScrollStore";
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
  const hidden = useScrollStore((state) => state.hidden);
  const scrollY = useScrollStore((state) => state.scrollY);

  let navClass = "border-b-2 border-gray-200 bg-white";

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

  if (hidden && scrollY > 60) {
    navClass =
      "absolute top-0 left-0 right-0  opacity-50 -translate-y-full transition-all ease-in-out duration-300";
  } else if (!hidden && scrollY > 60) {
    navClass =
      "fixed bg-white top-0 left-0 right-0 z-50 transition-all ease-in-out duration-300";
  } else if (!hidden && scrollY < 60) {
    navClass =
      "border-b-2 border-gray-200 bg-white transition-all ease-in-out duration-300";
  }

  return (
    <>
      <nav
        className={`border-b-2 border-gray-200 bg-white ${navClass} ${navStyles} transition-all ease-in-out duration-300`}
      >
        <div className="container flex flex-row items-center justify-between flex-1 py-2 md:py-3 lg:py-5 transition-all ease-in-out duration-300">
          <div className="logo cursor-pointer -translate-x-2.5 sm:translate-x-0 scale-80 sm:scale-100">
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
        </div>
      </nav>

      <div
        className={`fixed z-50 top-15 left-[50%] translate-x-[-50%] container nav-glass-card md:hidden rounded-md py-5 px-3 ${
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
            <Link
              href="#"
              className="px-4 py-2 rounded-[10px] common-cta-btn w-full"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
