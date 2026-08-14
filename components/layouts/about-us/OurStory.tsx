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
        display: "inline-block",
        color: "#ff691f",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "uppercase",
        border: "1px solid rgba(255,105,31,0.3)",
        px: 2,
        py: 0.5,
        borderRadius: 20,
        backgroundColor: "rgba(255,105,31,0.1)",
        boxShadow: "0 0 15px rgba(255,105,31,0.2)",

              
              
              
              
              mb: 1.5,
              
              fontFamily: "inherit",
            }}
            data-aos="fade-up"
          >
            {aboutUsOurStoryData.overline}
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
              
              
              
              
              
              mb: { xs: 3, md: 5 },
              fontFamily: "inherit",
              maxWidth: "900px",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {aboutUsOurStoryData.title}
          </Typography>

          {/* Paragraph 1 */}
          <Typography
            variant="body1"
            sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)",
              
              
              
              
              mb: { xs: 2.5, md: 3.5 },
              fontFamily: "inherit",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {aboutUsOurStoryData.paragraph1}
          </Typography>

          {/* Paragraph 2 */}
          <Typography
            variant="body1"
            sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)",
              
              
              
              
              fontFamily: "inherit",
            }}
            data-aos="fade-up"
            data-aos-delay="300"
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
