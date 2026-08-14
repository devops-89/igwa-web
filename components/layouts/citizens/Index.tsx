"use client";
import { hindiCitizensProblemData, hindiCitizensHowItWorksData, hindiCitizensWhatIgwaDoesData } from "@/constants/hindiGenericData";
import { citizensProblemData as en_citizensProblemData, citizensHowItWorksData as en_citizensHowItWorksData, citizensWhatIgwaDoesData as en_citizensWhatIgwaDoesData } from "@/constants/genericData";

import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "../police-dept/ProblemSection";
import HowItWorksSection from "../police-dept/HowItWorksSection";
import WhatIgwaDoesSection from "../police-dept/WhatIgwaDoesSection";
import SharedBannerSection from "../SharedBannerSection";
import { Box } from "@mui/material";

export default function CitizensIndex() {
  const { language } = useLanguage();
  const citizensProblemData = language === 'hi' ? hindiCitizensProblemData : en_citizensProblemData;
  const citizensHowItWorksData = language === 'hi' ? hindiCitizensHowItWorksData : en_citizensHowItWorksData;
  const citizensWhatIgwaDoesData = language === 'hi' ? hindiCitizensWhatIgwaDoesData : en_citizensWhatIgwaDoesData;

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
