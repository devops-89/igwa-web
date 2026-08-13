"use client";

import { aboutUsWeAreBuildingData as en_aboutUsWeAreBuildingData } from "@/constants/genericData";
import { hindiAboutUsWeAreBuildingData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
 

export default function WeAreBuilding() {
  const { language } = useLanguage();
  const aboutUsWeAreBuildingData = language === 'hi' ? hindiAboutUsWeAreBuildingData : en_aboutUsWeAreBuildingData;

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
        {/* Top Part: Title & Description */}
        <Box sx={{ maxWidth: "920px", mb: { xs: 6, md: 12 } }}>
          {/* Subheading / Tagline */}
          <Typography
            variant="body2"
            data-aos="fade-down"
            sx={{
              fontWeight: 800,
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.85)",
              mb: 1.5,
              letterSpacing: "0px",
              fontFamily: "inherit",
            }}
          >
            {aboutUsWeAreBuildingData.topSubheading}
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h2"
            data-aos="fade-up"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.65rem", sm: "2.5rem", md: "3.75rem" },
              lineHeight: 1.2,
              letterSpacing: "0px",
              color: "#FFFFFF",
              mb: { xs: 2.5, md: 3.5 },
              fontFamily: "inherit",
              maxWidth: "850px",
            }}
          >
            {aboutUsWeAreBuildingData.topTitle}
          </Typography>

          {/* Description Paragraph */}
          <Typography
            variant="body1"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "inherit",
            }}
          >
            {aboutUsWeAreBuildingData.topDescription}
          </Typography>
        </Box>

        {/* Bottom Part: 2-Column Layered Image & Text Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Overlapping Composite Images */}
          <Box
            data-aos="fade-right"
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "320px", sm: "420px", md: "460px" },
              height: { xs: "340px", sm: "440px", md: "480px" },
              mx: "auto",
            }}
          >
            {/* Background Book Cover Image (building1.png) */}
            <Box
              sx={{
                position: "absolute",
                top: "3%",
                right: 0,
                width: "76%",
                height: "92%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              <Image
                src="/images/about/building1.png"
                alt="BNS BSA Book Covers and Parliament"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>

            {/* Foreground Lady Justice Statue & Gavel (building2.png) */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 0, md: "-4%" },
                left: { xs: 0, md: "-5%" },
                width: "74%",
                height: "92%",
                zIndex: 2,
                filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))",
                pointerEvents: "none",
              }}
            >
              <Image
                src="/images/about/building2.png"
                alt="Lady Justice Statue and Gavel"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom left" }}
                priority
              />
            </Box>
          </Box>

          {/* Right Column: Heading & Text */}
          <Box sx={{ maxWidth: "560px" }} data-aos="fade-left">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.5rem", sm: "2.2rem", md: "3rem" },
                lineHeight: 1.2,
                letterSpacing: "0px",
                color: "#FFFFFF",
                mb: { xs: 2, md: 3.5 },
                fontFamily: "inherit",
              }}
            >
              {aboutUsWeAreBuildingData.bottomTitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: "inherit",
              }}
            >
              {aboutUsWeAreBuildingData.bottomDescriptionPart1}
              <Box component="span" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
                {aboutUsWeAreBuildingData.bottomDescriptionHighlight}
              </Box>
              {aboutUsWeAreBuildingData.bottomDescriptionPart2}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
