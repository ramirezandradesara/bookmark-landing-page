"use client";
import Image from "next/image";
import { useState } from "react";
const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      className={`py-2 border-b-2 border-grey ${
        !accordionOpen ? "pb-6" : "pb-8"
      }`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full items-center mt-5 ${
          !accordionOpen ? "mb-0" : "mb-5"
        }`}
      >
        <p className="text-accordionTitle font-medium text-left transition-all duration-300 ease-in-out">
          {question}
        </p>
        <Image
          src={"/images/icon-arrow.svg"}
          alt="arrow"
          width={17}
          height={10}
          className={`transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-accordionText leading-7">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
