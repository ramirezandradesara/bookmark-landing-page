import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="text-[35px] font-semibold text-darkBlue">Features</h2>
        <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed text-center mt-10">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        {/* switch */}
        <div></div>
      </div>

      <div className="max-w-screen-lg mx-auto my-36 flex gap-5 items-center pl-8">
        {/* img section */}
        <Image
          src={"/images/illustration-hero.svg"}
          alt="hero image"
          height={2000}
          width={2000}
          className="z-10"
        />
        {/* text section */}
        <div className="flex flex-col w-full">
          <h2 className="text-h2 font-semibold text-darkBlue tracking-wide leading-[70px] mb-4">
            A Simple Bookmark Manager
          </h2>
          <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed mb-10">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <Button variant={"secondary"} size={"default"} className="w-max">
            More info
          </Button>
        </div>
      </div>
      <div className="w-[40vw] h-[410px] bg-softBlue absolute left-0 -bottom-9 rounded-tr-[300px] rounded-br-[300px]" />
    </div>
  );
};

export default FeaturesSection;
