"use client";

import { hindiProblemData, hindiWhatIgwaDoesData } from "@/constants/hindiGenericData";
import phoneHand from "@/images/home/phone_in_hand.png";
import { COLORS } from "@/lib/enum";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
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
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 5,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: 1.2, md: "0.03px" },
                letterSpacing: { xs: "-1px", md: "1px" },
              }}
            >
              {hindiProblemData.title}
            </Typography>

            <Typography
              sx={{
                mb: 1.2,
                color: COLORS.WHITE,
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1,
                letterSpacing: ".8px",
                textAlign: "justify",
                fontWeight: 300,
              }}
            >
              {hindiProblemData.stats.join(" ")}
            </Typography>

            <Typography
              sx={{
                mb: 1.2,
                color: COLORS.WHITE,
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1,
                letterSpacing: ".8px",
                textAlign: "justify",
                fontWeight: 300,
              }}
            >
              {hindiProblemData.description1}
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: COLORS.WHITE,
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                letterSpacing: ".8px",
                textAlign: "justify",
                fontWeight: 300,
              }}
            >
              {hindiProblemData.description2}
            </Typography>

            <Typography
              sx={{
                mb: 5,
                color: COLORS.WHITE,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                letterSpacing: "0.8px",
                textAlign: "justify",
                fontWeight: 300,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.WHITE,
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.7,
                  letterSpacing: "0.8px",
                  fontWeight: 800,
                }}
              >
                IGWA{" "}
              </Typography>
              {hindiProblemData.conclusion.replace("IGWA ", "")} {hindiProblemData.note}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 800,
                lineHeight: { xs: 1.2, md: "30px" },
                letterSpacing: { xs: ".5px", md: "1px" },
                color: COLORS.WHITE,
                mt: 4,
                mb: 2,
              }}
            >
              {hindiWhatIgwaDoesData.section1.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: 300,
                lineHeight: 1.7,
                letterSpacing: "0.8px",
                mb: 2.5,
              }}
            >
              {hindiWhatIgwaDoesData.section1.point1}
            </Typography>

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                letterSpacing: "0.8px",
                textAlign: "justify",
                mb: 2.5,
              }}
            >
              {hindiWhatIgwaDoesData.section1.point2}
            </Typography>

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                letterSpacing: "0.8px",
                textAlign: "justify",
                mb: 2.5,
              }}
            >
              {hindiWhatIgwaDoesData.section1.point3}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {hindiWhatIgwaDoesData.section1.point4.split('।').filter(s => s.trim().length > 0).map((sentence, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: 1.7,
                    letterSpacing: "0.8px",
                    textAlign: "justify",
                  }}
                >
                  {sentence.trim()}।
                </Typography>
              ))}
            </Box>
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
