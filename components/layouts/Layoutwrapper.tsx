"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../widgets/Navbar";
import theme from "@/lib/theme";
import FooterSection from "../widgets/FooterSection";

const Layoutwrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
      <FooterSection />
    </ThemeProvider>
  );
};

export default Layoutwrapper;
