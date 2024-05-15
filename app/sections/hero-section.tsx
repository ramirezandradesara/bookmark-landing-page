import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative px-8">
      <div className="max-w-screen-lg flex-col-reverse lg:flex-row mx-auto my-36 flex gap-5 items-center lg:pl-8">
        <div className="flex flex-col items-center lg:items-start gap-8 w-full">
          <h1 className="text-h1 font-semibold text-darkBlue tracking-wide leading-[70px] text-center lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed text-center lg:text-left">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4 w-full justify-center lg:justify-start">
            <Button variant={"secondary"} size={"default"}>
              Get it on Chrome
            </Button>
            <Button variant={"outline"} size={"default"}>
              Get it on Firefox
            </Button>
          </div>
        </div>
        <Image
          src={"/images/illustration-hero.svg"}
          alt="hero image"
          height={2000}
          width={1800}
          className="z-10"
        />
      </div>
      <div className="hidden lg:flex custom-clamp h-[410px] bg-softBlue absolute right-0 -bottom-9 rounded-tl-[300px] rounded-bl-[300px]" />
    </section>
  );
};

export default HeroSection;
