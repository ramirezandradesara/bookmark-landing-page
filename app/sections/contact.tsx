import { Button } from "@/components/ui/button";
import React from "react";

const ContactSection = () => {
  return (
    <section className="mx-auto bg-softBlue flex flex-col items-center py-16 px-8">
      <p className="text-base text-white tracking-[6px] uppercase mb-12 text-center">
        35,000+ already joined
      </p>
      <h2 className="text-h2 text-white font-semibold max-w-[500px] text-center mb-10">
        Stay up-to-date with what we’re doing
      </h2>
      <form className="flex gap-4 flex-col lg:flex-row">
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block py-4 px-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Button variant={"primary"}>Contact us</Button>
      </form>
    </section>
  );
};

export default ContactSection;
