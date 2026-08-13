"use client";

import { aboutUsOurStoryData as en_aboutUsOurStoryData } from "@/constants/genericData";
import { hindiAboutUsOurStoryData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import { Box, Typography, Container } from "@mui/material";


export default function OurStory() {
  const { language } = useLanguage();
  const aboutUsOurStoryData = language === 'hi' ? hindiAboutUsOurStoryData : en_aboutUsOurStoryData;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        py: { xs: 8, md: 16 },
        px: { xs: 2, sm: 3 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "1050px" }}>
          {/* Subheader Label */}
          <Typography
            variant="overline"
            sx={{
              display: "block",
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.9rem" },
              letterSpacing: "0.12em",
              color: "rgba(255, 255, 255, 0.9)",
              mb: 1.5,
              textTransform: "uppercase",
              fontFamily: "inherit",
            }}
          >
            {aboutUsOurStoryData.overline}
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.65rem", sm: "2.5rem", md: "3.75rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              mb: { xs: 3, md: 5 },
              fontFamily: "inherit",
              maxWidth: "900px",
            }}
          >
            {aboutUsOurStoryData.title}
          </Typography>

          {/* Paragraph 1 */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "0.925rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: 1.65,
              color: "rgba(255, 255, 255, 0.8)",
              mb: { xs: 2.5, md: 3.5 },
              fontFamily: "inherit",
            }}
          >
            {aboutUsOurStoryData.paragraph1}
          </Typography>

          {/* Paragraph 2 */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "0.925rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: 1.65,
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "inherit",
            }}
          >
            <Box component="span" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
              {aboutUsOurStoryData.paragraph2Highlight}
            </Box>
            {aboutUsOurStoryData.paragraph2Rest}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
