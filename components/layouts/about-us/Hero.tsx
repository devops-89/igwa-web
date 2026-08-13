"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Hero() {
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
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.25rem", sm: "3.5rem", md: "5.25rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            mb: { xs: 2, md: 2.5 },
            fontFamily: "inherit",
          }}
          data-aos="fade-up"
        >
          About IGWA
        </Typography>

        {/* Subheading / Tagline */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.35rem", md: "1.75rem" },
            lineHeight: 1.35,
            color: "#FFFFFF",
            mb: { xs: 2.5, md: 3 },
            maxWidth: "850px",
            fontFamily: "inherit",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We're not trying to automate justice, We're trying to remove what
          slows it down.
        </Typography>

        {/* Description Body Paragraph */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.15rem" },
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.82)",
            maxWidth: "920px",
            mb: { xs: 12, md: 8 },
            fontFamily: "inherit",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          IGWA started with a simple observation: the law doesn't move slowly
          because people don't care. It moves slowly because the paperwork
          behind every case is heavy, repetitive, and unforgiving of small
          mistakes — and that weight falls on both the citizen filing a report
          and the officer processing it.
        </Typography>

        {/* Scroll Indicator */}
        <Box
          onClick={handleScrollDown}
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 32 },
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
              color: "rgba(255, 255, 255, 0.75)",
              letterSpacing: "0.02em",
            }}
          >
            Scroll to Explore
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
