"use client";
import React, { useState } from "react";
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
        className="flex justify-between w-full items-center"
      >
        <p
          className={`text-accordionTitle font-medium text-left transition-all duration-300 ease-in-out mt-5 ${
            !accordionOpen ? "mb-0" : "mb-5"
          }`}
        >
          {question}
        </p>
        <svg
          className="fill-indigo-500 shrink-0 ml-6"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
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