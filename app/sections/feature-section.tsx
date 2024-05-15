"use client";
import FeatureButton from "@/components/feature-btn";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/data/features";
import Image from "next/image";
import React, { useState } from "react";

const FeaturesSection = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(1);

  return (
    <section className="relative px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="text-[35px] font-semibold text-darkBlue">Features</h2>
        <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed text-center mt-10">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <div className="mt-20 flex">
          {FEATURES.map(({ id, feature }) => (
            <FeatureButton
              key={id}
              id={id}
              feature={feature}
              featureSelected={featureSelected}
              setFeatureSelected={setFeatureSelected}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-32 mb-36 flex items-center justify-between gap-10">
        <Image
          src={FEATURES[featureSelected - 1].imgSrc}
          alt="feature image"
          height={750}
          width={750}
          className="z-10"
          loading="lazy"
        />
        <div className="flex flex-col ">
          <h2 className="text-h2 font-semibold text-darkBlue tracking-wide leading-[70px] mb-4">
            {FEATURES[featureSelected - 1].title}
          </h2>
          <p className="text-gray text-lg tracking-wide max-w-[565px] leading-relaxed mb-10">
            {FEATURES[featureSelected - 1].text}
          </p>
          <Button variant={"secondary"} size={"default"} className="w-max">
            More info
          </Button>
        </div>
      </div>
      <div className="custom-clamp h-[410px] bg-softBlue absolute left-0 -bottom-28 rounded-tr-[300px] rounded-br-[300px]" />
    </section>
  );
};

export default FeaturesSection;
