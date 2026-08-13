"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Button } from "@mui/material";
import { hindiCtaData } from "@/constants/hindiGenericData";

export default function CTASection() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 8, md: 16 } }}>
      <Container maxWidth="lg">
        <Box
          data-aos="fade-up"
          sx={{
            position: "relative",
            borderRadius: { xs: "32px", md: "48px" },
            bgcolor: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              p: { xs: 4, md: 8 },
              flex: 1.2,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: "white",
                mb: 1,
                letterSpacing: "-0.04em",
                lineHeight: 1.2,
              }}
            >
              {hindiCtaData.title}
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                background: "linear-gradient(180deg, #FFFFFF 0%, #666666 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {hindiCtaData.subtitle}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.8)",
                mb: 2,
                letterSpacing: "-0.02em",
                lineHeight: 1.6,
              }}
            >
              {hindiCtaData.description1} {hindiCtaData.description2}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "rgba(255,255,255,0.5)",
                mb: 5,
                letterSpacing: "-0.02em",
                lineHeight: 1.6,
                maxWidth: "90%",
              }}
            >
              {hindiCtaData.description3} {hindiCtaData.description4}
            </Typography>

            <Box>
              <Button
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  borderRadius: "100px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.8)" },
                }}
              >
                {hindiCtaData.btnText}
              </Button>
            </Box>
          </Box>

          {/* Image Content */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              minHeight: { xs: 400, md: 600 },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              mt: { xs: -4, md: 0 },
            }}
          >
            {/* Ambient Glow */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                background:
                  "radial-gradient(circle, rgba(1,113,227,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 600,
                aspectRatio: "416 / 456",
                zIndex: 1,
                transform: { xs: "translateY(20px) scale(1.2)", md: "translateY(40px) scale(1.6)" },
                transformOrigin: "bottom center",
              }}
            >
              <Image
                src="/images/home/cta-phone.png"
                alt="IGWA Phone"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  filter: "drop-shadow(0 -10px 40px rgba(0,0,0,0.5))",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
