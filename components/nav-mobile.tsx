import Image from "next/image";
import React from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import { NAVIGATION } from "@/data/navigations";
import { Button } from "./ui/button";

export const NavMobile = ({ setMenuOpen }: any) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-darkBlue opacity-95 z-40 fixed inset-0 overflow-auto p-8">
      <div className="flex justify-between items-center mb-9">
        <Logo dark fullDark />
        <button onClick={() => setMenuOpen(false)}>
          <Image
            src={"/images/icon-close.svg"}
            alt="icon-close"
            width={20}
            height={5}
            objectFit="cover"
            className="w-[18px] h-[16px]"
          />
        </button>
      </div>
      <div className="flex justify-between items-center flex-col flex-grow flex-1">
        <ul className={"flex flex-col w-full items-center mb-7"}>
          <hr className="w-full border-gray opacity-50" />
          {NAVIGATION.map(({ href, name }, index) => (
            <>
              <li key={index} className="my-4">
                <Link
                  href={href}
                  className="text-[20px] font-light tracking-widest text-white uppercase"
                >
                  {name}
                </Link>
              </li>
              <hr className="w-full border-gray  opacity-50" />
            </>
          ))}
          <Button variant="transparent" className="mt-6">LOGIN</Button>
        </ul>
      </div>
      <div className="flex gap-12 self-center">
        <Image
          src={"/images/icon-facebook.svg"}
          alt="logo"
          width={20}
          height={20}
        />
        <Image
          src={"/images/icon-twitter.svg"}
          alt="logo"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

// export default NavMobile;
