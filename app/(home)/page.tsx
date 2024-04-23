import HeroSection from "@/app/sections/hero-section";
import FeaturesSection from "@/app/sections/feature-section";
import React from "react";
import ExtensionSection from "../sections/extension-section";
import FaqSection from "../sections/faq-section";
import ContactSection from "../sections/contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ExtensionSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Home;
