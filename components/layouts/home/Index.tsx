"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import WhatIGWADoesSection from "./WhatIGWADoesSection";
import SocialProofSection from "./SocialProofSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import SlidingLogo from "./components/SlidingLogo";
import { Box } from "@mui/material";

export default function HomeIndex() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <HeroSection />
      <SlidingLogo />
      <FeaturesSection />
      <WhatIGWADoesSection />
      <SocialProofSection />
      <CTASection />
      <FAQSection />
    </Box>
  );
}
