"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function OurStory() {
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
            data-aos="fade-up"
          >
            OUR STORY
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
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built from watching the process, not guessing at it.
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
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Filing an FIR sounds simple until you're the one doing it, either as
            someone who doesn't know which section of law applies to what just
            happened to them, or as an officer who has to translate a stressful,
            half-clear account into a legally precise document, then repeat that
            structure for the case diary, and again for the chargesheet, all
            while a statutory clock is running.
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
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Box component="span" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
              IGWA
            </Box>{" "}
            was built to sit inside that exact gap, not to replace the judgment
            at either end of it, but to handle the drafting, the
            section-matching, and the paperwork structure so that judgment has
            room to actually happen.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
