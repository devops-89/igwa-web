"use client";

import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeBelieve from "./WhatWeBelieve";
import WeAreBuilding from "./WeAreBuilding";
import SharedBannerSection from "../SharedBannerSection";
import { aboutSharedBannerData } from "@/constants/genericData";

export default function AboutUsIndex() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        overflowX: "hidden",
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
