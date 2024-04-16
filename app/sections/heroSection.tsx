import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-lg mx-auto my-36 flex gap-5 items-center pl-8">
        {/* text section */}
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-[50px] font-semibold text-darkBlue tracking-wide leading-[70px]">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4">
            <Button variant={"secondary"} size={"default"}>
              Get it on Chrome
            </Button>
            <Button variant={"outline"} size={"default"}>
              Get it on Firefox
            </Button>
          </div>
        </div>
        {/* img section */}
        <Image
          src={"/images/illustration-hero.svg"}
          alt="hero image"
          height={2000}
          width={1800}
          className="z-10"
        />
      </div>
      <div className="w-[40vw] h-[410px] bg-softBlue absolute right-0 -bottom-9 rounded-tl-[300px] rounded-bl-[300px]" />
    </div>
  );
};

export default HeroSection;
