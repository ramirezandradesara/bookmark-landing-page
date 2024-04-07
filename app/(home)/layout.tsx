"use client";
import Navbar from "@/components/navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
