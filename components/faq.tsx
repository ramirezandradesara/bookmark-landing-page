import React from "react";
import Accordion from "./accordion";
import { FAQ } from "@/data/faq";

const Faq = () => {
  return (
    <div className="max-w-[600px] mb-16">
      <div className="border-b-2 border-grey" />
      {FAQ.map(({ question, answer }, index) => (
        <Accordion question={question} answer={answer} key={index} />
      ))}
    </div>
  );
};

export default Faq;
