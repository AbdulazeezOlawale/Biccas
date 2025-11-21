import Logo from "@/app/assets/icons/logo";
import Link from "next/link";
import React from "react";

type navBarProps = {
  className: string
}

const Navbar = ({ className }: navBarProps) => {
  type LinkItem = {
    title: string;
    isActive: boolean;
  };

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
    <section
      className={`container flex flex-row items-center justify-between flex-1 py-5 px-3 ${className} nav-glass-card`}
    >
      <div className="logo cursor-pointer">
        <Logo />
      </div>
      <div className="flex flex-row items-center justify-between flex-1 ">
        <ul className="flex flex-row items-center justify-center  flex-1">
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
              className="px-4 py-2 rounded-[10px] text-(--text-white) bg-(--primary-color-light) border-2 border-transparent hover:border-2 hover:border-(--primary-color-light) hover:bg-transparent hover:text-(--primary-color-light) transition-all"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
