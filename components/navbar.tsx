import { useState } from "react";
import { NAVIGATION } from "@/data/navigations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { NavMobile } from "./nav-mobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center mt-[60px] px-8">
        <Image
          src={"/images/logo-bookmark.svg"}
          alt="logo"
          width={148}
          height={45}
          className="h-auto w-[170px]"
        />
        <div className="flex gap-16 items-center">
          <div className="lg:hidden">
            {/* Hamburger icon */}
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-darkBlue hover:text-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul className={"flex gap-16 sm:hidden lg:flex"}>
            {NAVIGATION.map(({ href, name }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="text-darkBlue hover:text-red text-base uppercase tracking-widest font-medium"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant={"primary"} size={"lg"} className="hidden lg:flex">
            LOGIN
          </Button>
        </div>
      </nav>

      {menuOpen && <NavMobile setMenuOpen={setMenuOpen} />}
    </>
  );
};

export default Navbar;
