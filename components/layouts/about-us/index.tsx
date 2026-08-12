"use client";

import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeBelieve from "./WhatWeBelieve";
import WeAreBuilding from "./WeAreBuilding";

export default function AboutUsIndex() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#04070D",
        color: "#FFFFFF",
      }}
    >
      <Hero />
      <OurStory />
      <WhatWeBelieve />
      <WeAreBuilding />
    </Box>
  );
}
