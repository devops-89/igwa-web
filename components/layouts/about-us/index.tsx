"use client";

import { hindiAboutSharedBannerData } from "@/constants/hindiGenericData";
import { aboutSharedBannerData as en_aboutSharedBannerData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeBelieve from "./WhatWeBelieve";
import WeAreBuilding from "./WeAreBuilding";
import SharedBannerSection from "../SharedBannerSection";

export default function AboutUsIndex() {
  const { language } = useLanguage();
  const aboutSharedBannerData = language === 'hi' ? hindiAboutSharedBannerData : en_aboutSharedBannerData;

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        bgcolor: "#000",
        color: "#FFFFFF",
      }}
    >
      <Hero />
      <OurStory />
      <WhatWeBelieve />
      <WeAreBuilding />
      <SharedBannerSection
        trailingTitle={aboutSharedBannerData.trailingTitle}
        trailingSubtitle={aboutSharedBannerData.trailingSubtitle}
        buttons={aboutSharedBannerData.buttons}
        textAlign="center"
      />
    </Box>
  );
}
