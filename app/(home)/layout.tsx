"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
