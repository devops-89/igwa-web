"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid } from "@mui/material";
import { COLORS } from "@/lib/enum";
import phoneHand from "@/images/home/phone_in_hand.png";
export default function FeaturesSection() {
  return (
    <Box
      sx={{ backgroundColor: "#000", color: "white", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: 48,
                lineHeight: "52.8px",
                letterSpacing: "-2.4px",
              }}
            >
              Paperwork shouldn&apos;t be the hardest part of the job.
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: COLORS.WHITE,
                fontSize: 24,
                lineHeight: "27px",
                letterSpacing: "-1.08px",
                textAlign: "justify",
                fontWeight: 400,
              }}
            >
              FIRs, daily case diaries, chargesheets, each one hand-typed, each
              one repetitive, each one a chance to lose an hour that should've
              gone to the actual investigation. Add statutory deadlines under
              BNSS on top of an already heavy caseload, and it's easy to see why
              paperwork backs up faster than cases close.
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: COLORS.WHITE,
                fontSize: 24,
                lineHeight: "27px",
                letterSpacing: "-1.08px",
                textAlign: "justify",
                fontWeight: 400,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 24,
                  lineHeight: "27px",
                  letterSpacing: "-1.08px",
                  fontWeight: 700,
                }}
              >
                IGWA{" "}
              </Typography>
              doesn&apos;t touch an officer&apos;s judgment or the legal
              process. It just takes the drafting weight off it.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: "52.8px",
                letterSpacing: "-2.4px",
                color: COLORS.WHITE,
              }}
            >
              Diary Entries, Dictated Not Typed
            </Typography>

            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "-1.08px",
                mt: 2,
              }}
            >
              Update a case diary the way you actually work, on your feet, not
              at a desk.
            </Typography>

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: 24,
                lineHeight: "27px",
                letterSpacing: "-1.08px",
                textAlign: "justify",
              }}
            >
              Speak your update, in Hindi or English, right from the field. IGWA
              turns it into a structured, dated diary entry — no re-typing after
              a long shift, no formatting to get right, no risk of it slipping
              to tomorrow.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: 400, md: 600 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "70%",
                  height: "70%",
                  background:
                    "radial-gradient(circle, rgba(1,113,227,0.35) 0%, rgba(255,105,31,0.25) 40%, transparent 70%)",
                  filter: "blur(50px)",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: 800,
                  height: 700,
                }}
              >
                <Image
                  src={phoneHand}
                  alt="IGWA mobile app in hand"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
