"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "../police-dept/ProblemSection";
import HowItWorksSection from "../police-dept/HowItWorksSection";
import WhatIgwaDoesSection from "../police-dept/WhatIgwaDoesSection";
import SharedBannerSection from "../SharedBannerSection";
import { Box } from "@mui/material";
import { citizensProblemData, citizensHowItWorksData, citizensWhatIgwaDoesData } from "@/constants/genericData";

export default function CitizensIndex() {
  return (
    <Box sx={{ overflowX: "hidden", bgcolor: "#000" }}>
      <HeroSection />
      <ProblemSection {...citizensProblemData} />
      <HowItWorksSection {...citizensHowItWorksData} />
      <WhatIgwaDoesSection {...citizensWhatIgwaDoesData} />
      <SharedBannerSection 
        trailingTitle={citizensWhatIgwaDoesData.trailingTitle}
        trailingSubtitle={citizensWhatIgwaDoesData.trailingSubtitle}
        buttons={citizensWhatIgwaDoesData.buttons}
      />
    </Box>
  );
}
