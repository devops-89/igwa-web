"use client";

import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../widgets/Navbar"), { ssr: false });

const Layoutwrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layoutwrapper;
