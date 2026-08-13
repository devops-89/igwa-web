"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

interface CardData {
  id: number;
  title: string;
  description: string;
  watermarkOrientation: "horizontal" | "vertical";
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "The law should be legible, not just enforceable",
    description:
      "A citizen shouldn't need a lawyer to understand what they're allowed to report.",
    watermarkOrientation: "horizontal",
  },
  {
    id: 2,
    title: "Speed and accuracy aren't a trade-off.",
    description: "Faster paperwork should mean fewer errors, not more of them.",
    watermarkOrientation: "vertical",
  },
  {
    id: 3,
    title: "AI drafts. Humans decide.",
    description:
      "Every legal fact IGWA surfaces is retrieved, cited, and traceable — never invented — and every document requires a human sign-off before it means anything.",
    watermarkOrientation: "vertical",
  },
  {
    id: 4,
    title: "Accountability is a feature, not a constraint.",
    description:
      "Immutable case diaries and full audit trails aren't compliance checkboxes — they're what make the system trustworthy enough to use.",
    watermarkOrientation: "horizontal",
  },
];

export default function WhatWeBelieve() {
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
        {/* Section Header with Line & Dot Accent */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 5, md: 8 },
            width: "100%",
          }}
        >
          {/* Left Line with Dot */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1.5px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            />
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
              }}
            />
          </Box>

          {/* Section Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.4rem", sm: "2.2rem", md: "3.5rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              px: { xs: 1.5, sm: 2, md: 4 },
              textAlign: "center",
              whiteSpace: { xs: "normal", sm: "nowrap" },
              fontFamily: "inherit",
            }}
            data-aos="fade-up"
          >
            What We Believe
          </Typography>

          {/* Right Line with Dot */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "1.5px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            />
          </Box>
        </Box>

        {/* CSS Grid for Perfect 2x2 Cards Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 3, md: 3.5 },
            width: "100%",
          }}
        >
          {cardsData.map((card, index) => (
            <Box
              key={card.id}
              sx={{
                position: "relative",
                backgroundColor: "#F3F4F6",
                borderRadius: "16px",
                p: { xs: 3.5, md: 4.5 },
                minHeight: { xs: "auto", md: "280px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.35)",
                },
              }}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Faint IGWA Watermark */}
              {card.watermarkOrientation === "horizontal" ? (
                <Typography
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 20,
                    fontWeight: 800,
                    fontSize: { xs: "3.2rem", md: "4.5rem" },
                    lineHeight: 1,
                    color: "rgba(0, 0, 0, 0.05)",
                    userSelect: "none",
                    letterSpacing: "4px",
                    fontFamily: "inherit",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  IGWA
                </Typography>
              ) : (
                <Typography
                  sx={{
                    position: "absolute",
                    right: { xs: -32, md: -45 },
                    top: "50%",
                    transform: "translateY(-50%) rotate(90deg)",
                    fontWeight: 800,
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    lineHeight: 1,
                    color: "rgba(0, 0, 0, 0.05)",
                    userSelect: "none",
                    letterSpacing: "4px",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  IGWA
                </Typography>
              )}

              {/* Number Box */}
              <Box sx={{ zIndex: 1, mb: { xs: 5, md: 7 } }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    backgroundColor: "#E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "#1F2937",
                      fontFamily: "inherit",
                    }}
                  >
                    {card.id}
                  </Typography>
                </Box>
              </Box>

              {/* Content */}
              <Box
                sx={{
                  zIndex: 1,
                  pr:
                    card.watermarkOrientation === "vertical"
                      ? { xs: 4, md: 7 }
                      : 0,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    lineHeight: 1.3,
                    color: "#111827",
                    mb: 1.25,
                    fontFamily: "inherit",
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "0.85rem", md: "0.92rem" },
                    lineHeight: 1.55,
                    color: "#6B7280",
                    fontFamily: "inherit",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
