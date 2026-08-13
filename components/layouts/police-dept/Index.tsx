"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import HowItWorksSection from "./HowItWorksSection";
import WhatIgwaDoesSection from "./WhatIgwaDoesSection";
import SharedBannerSection from "../SharedBannerSection";
import { Box } from "@mui/material";
import { 
  policeDeptProblemData, 
  policeDeptHowItWorksData, 
  policeDeptWhatIgwaDoesData 
} from "@/constants/genericData";

export default function PoliceDeptIndex() {
  return (
    <Box sx={{ overflowX: "hidden", bgcolor: "#000" }}>
      <HeroSection />
      <ProblemSection {...policeDeptProblemData} />
      <HowItWorksSection {...policeDeptHowItWorksData} />
      <WhatIgwaDoesSection {...policeDeptWhatIgwaDoesData} />
      <SharedBannerSection 
        trailingTitle={policeDeptWhatIgwaDoesData.trailingTitle}
        trailingSubtitle={policeDeptWhatIgwaDoesData.trailingSubtitle}
        buttons={policeDeptWhatIgwaDoesData.buttons}
      />
    </Box>
  );
}
