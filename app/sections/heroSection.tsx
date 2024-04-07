import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-6xl font-semibold text-darkBlue tracking-wide">
        A Simple Bookmark Manager
      </h1>
      <p className="text-gray text-lg tracking-wide">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
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
  );
};

export default HeroSection;
