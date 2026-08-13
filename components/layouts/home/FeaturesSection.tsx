"use client";
import { hindiProblemData, hindiWhatIgwaDoesData } from "@/constants/hindiGenericData";
import { problemData as en_problemData, whatIgwaDoesData as en_whatIgwaDoesData } from "@/constants/genericData";

import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid } from "@mui/material";
import { COLORS } from "@/lib/enum";
import phoneHand from "@/images/home/phone_in_hand.png";
export default function FeaturesSection() {
  const { language } = useLanguage();
  const problemData = language === 'hi' ? hindiProblemData : en_problemData;
  const whatIgwaDoesData = language === 'hi' ? hindiWhatIgwaDoesData : en_whatIgwaDoesData;

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
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: 32, md: 48 },
                lineHeight: { xs: 1.2, md: "52.8px" },
                letterSpacing: { xs: "-1px", md: "-2.4px" },
              }}
            >
              {problemData.title}
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: COLORS.WHITE,
                fontSize: { xs: 18, md: 24 },
                lineHeight: { xs: 1.4, md: "27px" },
                letterSpacing: "-1.08px",
                textAlign: "justify",
                fontWeight: 400,
              }}
            >
              {problemData.stats.join(" ")}
              <br />
              <br />
              {problemData.description1}
              <br />
              <br />
              {problemData.description2}
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: COLORS.WHITE,
                fontSize: { xs: 18, md: 24 },
                lineHeight: { xs: 1.4, md: "27px" },
                letterSpacing: "-1.08px",
                textAlign: "justify",
                fontWeight: 400,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.WHITE,
                  fontSize: { xs: 18, md: 24 },
                  lineHeight: { xs: 1.4, md: "27px" },
                  letterSpacing: "-1.08px",
                  fontWeight: 700,
                }}
              >
                IGWA{" "}
              </Typography>
              {problemData.conclusion.replace("IGWA ", "")} {problemData.note}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, md: 48 },
                fontWeight: 700,
                lineHeight: { xs: 1.2, md: "52.8px" },
                letterSpacing: { xs: "-1px", md: "-2.4px" },
                color: COLORS.WHITE,
              }}
            >
              {whatIgwaDoesData.section1.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontWeight: 400,
                lineHeight: { xs: 1.4, md: "27px" },
                letterSpacing: "-1.08px",
                mt: 2,
              }}
            >
              {whatIgwaDoesData.section1.point1}
            </Typography>

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: { xs: 18, md: 24 },
                lineHeight: { xs: 1.4, md: "27px" },
                letterSpacing: "-1.08px",
                textAlign: "justify",
              }}
            >
              {whatIgwaDoesData.section1.point2}
              <br />
              <br />
              {whatIgwaDoesData.section1.point3}
              <br />
              <br />
              {whatIgwaDoesData.section1.point4.split('। ').join('।\\n').split('\\n').map((sentence: string, index: number) => (
                <React.Fragment key={index}>
                  {sentence}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
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
