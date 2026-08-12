"use client";

import React from "react";
import Navbar from "../widgets/Navbar";

const Layoutwrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layoutwrapper;
