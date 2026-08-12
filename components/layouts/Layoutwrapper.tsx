"use client";

import theme from "@/lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import FooterSection from "../widgets/FooterSection";
import Navbar from "../widgets/Navbar";

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
