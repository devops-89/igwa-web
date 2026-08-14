"use client";
import { hindiPoliceDeptProblemData, hindiPoliceDeptHowItWorksData, hindiPoliceDeptWhatIgwaDoesData } from "@/constants/hindiGenericData";
import { policeDeptProblemData as en_policeDeptProblemData, policeDeptHowItWorksData as en_policeDeptHowItWorksData, policeDeptWhatIgwaDoesData as en_policeDeptWhatIgwaDoesData } from "@/constants/genericData";

import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import HowItWorksSection from "./HowItWorksSection";
import WhatIgwaDoesSection from "./WhatIgwaDoesSection";
import SharedBannerSection from "../SharedBannerSection";
import { Box } from "@mui/material";

export default function PoliceDeptIndex() {
  const { language } = useLanguage();
  const policeDeptProblemData = language === 'hi' ? hindiPoliceDeptProblemData : en_policeDeptProblemData;
  const policeDeptHowItWorksData = language === 'hi' ? hindiPoliceDeptHowItWorksData : en_policeDeptHowItWorksData;
  const policeDeptWhatIgwaDoesData = language === 'hi' ? hindiPoliceDeptWhatIgwaDoesData : en_policeDeptWhatIgwaDoesData;

  return (
    <Box sx={{ overflowX: "hidden", bgcolor: "#000" }}>
      <HeroSection />
      <ProblemSection {...hindiPoliceDeptProblemData} />
      <HowItWorksSection {...hindiPoliceDeptHowItWorksData} />
      <WhatIgwaDoesSection {...hindiPoliceDeptWhatIgwaDoesData} />
      <SharedBannerSection 
        trailingTitle={policeDeptWhatIgwaDoesData.trailingTitle}
        trailingSubtitle={policeDeptWhatIgwaDoesData.trailingSubtitle}
        buttons={policeDeptWhatIgwaDoesData.buttons}

      />
    </Box>
  );
}
