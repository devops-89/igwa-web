"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import { Box } from "@mui/material";

export default function HomeIndex() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <HeroSection />
      <FeaturesSection />
    </Box>
  );
}
