"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid } from "@mui/material";

const AVATAR_POSITIONS = [
  { src: "/images/home/avatars/avatar-18.png", top: "8%", left: "38%", size: 62 },
  { src: "/images/home/avatars/avatar-19.png", top: "18%", left: "52%", size: 62 },
  { src: "/images/home/avatars/avatar-20.png", top: "28%", left: "62%", size: 62 },
  { src: "/images/home/avatars/avatar-21.png", top: "42%", left: "68%", size: 62 },
  { src: "/images/home/avatars/avatar-22.png", top: "58%", left: "65%", size: 62 },
  { src: "/images/home/avatars/avatar-23.png", top: "72%", left: "55%", size: 62 },
  { src: "/images/home/avatars/avatar-24.png", top: "82%", left: "42%", size: 62 },
  { src: "/images/home/avatars/avatar-25.png", top: "85%", left: "28%", size: 62 },
  { src: "/images/home/avatars/avatar-26.png", top: "78%", left: "14%", size: 62 },
  { src: "/images/home/avatars/avatar-27.png", top: "65%", left: "5%", size: 62 },
  { src: "/images/home/avatars/avatar-28.png", top: "48%", left: "2%", size: 62 },
  { src: "/images/home/avatars/avatar-29.png", top: "30%", left: "8%", size: 62 },
  { src: "/images/home/avatars/avatar-30.png", top: "15%", left: "20%", size: 62 },
  { src: "/images/home/avatars/avatar-10.png", top: "22%", left: "35%", size: 62 },
  { src: "/images/home/avatars/avatar-11.png", top: "38%", left: "22%", size: 62 },
  { src: "/images/home/avatars/avatar-12.png", top: "52%", left: "18%", size: 62 },
  { src: "/images/home/avatars/avatar-13.png", top: "35%", left: "48%", size: 46 },
  { src: "/images/home/avatars/avatar-14.png", top: "48%", left: "42%", size: 46 },
  { src: "/images/home/avatars/avatar-15.png", top: "55%", left: "52%", size: 46 },
  { src: "/images/home/avatars/avatar-16.png", top: "42%", left: "58%", size: 46 },
  { src: "/images/home/avatars/avatar-1.png", top: "50%", left: "32%", size: 44 },
  { src: "/images/home/avatars/avatar-2.png", top: "60%", left: "38%", size: 46 },
  { src: "/images/home/avatars/avatar-3.png", top: "32%", left: "58%", size: 46 },
  { src: "/images/home/avatars/avatar-4.png", top: "62%", left: "48%", size: 46 },
  { src: "/images/home/avatars/avatar-5.png", top: "25%", left: "45%", size: 46 },
  { src: "/images/home/avatars/avatar-6.png", top: "68%", left: "28%", size: 46 },
  { src: "/images/home/avatars/avatar-8.png", top: "18%", left: "58%", size: 46 },
  { src: "/images/home/avatars/avatar-9.png", top: "72%", left: "18%", size: 62 },
  { src: "/images/home/avatars/avatar-32.png", top: "12%", left: "48%", size: 62 },
  { src: "/images/home/avatars/avatar-17.png", top: "5%", left: "28%", size: 62 },
];

export default function SocialProofSection() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 420,
                mx: { xs: "auto", md: 0 },
                aspectRatio: "1",
              }}
            >
              {AVATAR_POSITIONS.map((avatar, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: avatar.top,
                    left: avatar.left,
                    width: avatar.size,
                    height: avatar.size,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Image
                    src={avatar.src}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              Built with the people who&apos;ll actually use it.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                lineHeight: 1.125,
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
                mb: 3,
              }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                IGWA
              </Box>{" "}
              is developed in direct consultation with domain experts and, wherever
              possible, serving police personnel because a drafting tool only earns trust
              if it&apos;s built around the procedure officers are actually accountable
              to.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                lineHeight: 1.125,
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Every statutory mapping and document format is validated against real BNSS
              requirements before it ships, and every workflow from FIR intake to diary
              entry to chargesheet is shaped around how a station and an investigating
              officer actually work, not how a form assumes they should.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
