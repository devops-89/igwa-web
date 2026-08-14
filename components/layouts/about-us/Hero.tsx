"use client";

import { aboutUsHeroData as en_aboutUsHeroData } from "@/constants/genericData";
import { hindiAboutUsHeroData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
 

export default function Hero() {
  const { language } = useLanguage();
  const aboutUsHeroData = language === 'hi' ? hindiAboutUsHeroData : en_aboutUsHeroData;

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.92) 80%, #000000 100%), url('/images/about/about-hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
        color: "white",
        pt: { xs: 20, md: 18 },
        pb: { xs: 8, md: 8 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h1"
          data-aos="fade-up"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 40, sm: 56, md: 72 },
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            mb: { xs: 2, md: 2.5 },
            fontFamily: "inherit",
          }}
          >
          {aboutUsHeroData.title}
        </Typography>

        {/* Subheading / Tagline */}
        <Typography
          variant="h2"
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
            
            
            
            
            
            mb: { xs: 2.5, md: 3 },
            maxWidth: "850px",
            fontFamily: "inherit",
          }}
          >
          {aboutUsHeroData.subtitle}
        </Typography>

        {/* Description Body Paragraph */}
        <Typography
          variant="body1"
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)",
            
            
            
            
            
            maxWidth: "920px",
            mb: { xs: 12, md: 8 },
            fontFamily: "inherit",
          }}
          >
          {aboutUsHeroData.description}
        </Typography>

        {/* Scroll Indicator */}
        <Box
          onClick={handleScrollDown}
          sx={{
            position: "absolute",
            bottom: { xs: 50, md: 80 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            opacity: 0.8,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
            }}
          >
            {aboutUsHeroData.scrollText}
          </Typography>

          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatDown 2s ease-in-out infinite",
              "@keyframes floatDown": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(5px)" },
              },
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 16, color: "#FFFFFF" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
