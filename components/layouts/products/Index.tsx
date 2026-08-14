"use client";

import React from "react";
import UnderTheHoodSection from "./UnderTheHoodSection";
import HowEngineWorksSection from "./HowEngineWorksSection";
import WhyThisMattersSection from "./WhyThisMattersSection";
import HumanInTheLoopSection from "./HumanInTheLoopSection";
import { Box } from "@mui/material";

export default function ProductsIndex() {
  return (
    <Box sx={{ backgroundColor: "#000000" }}>
      <UnderTheHoodSection />
      <HowEngineWorksSection />
      <WhyThisMattersSection />
      <HumanInTheLoopSection />
    </Box>
  );
}
