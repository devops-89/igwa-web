"use client";

import theme from "@/lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../widgets/Navbar";
import FooterSection from "../widgets/FooterSection";

const Layoutwrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 50,
      delay: 50,
    });
  }, []);

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
