"use client";

import { whatIgwaDoesData as en_whatIgwaDoesData } from "@/constants/genericData";
import { hindiWhatIgwaDoesData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function WhatIGWADoesSection() {
  const { language } = useLanguage();
  const whatIgwaDoesData = language === 'hi' ? hindiWhatIgwaDoesData : en_whatIgwaDoesData;

  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.75rem" },
              letterSpacing: "-0.05em",
              mb: 1.5,
            }}
          >
            {whatIgwaDoesData.section2.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              letterSpacing: "-0.045em",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {whatIgwaDoesData.section2.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          <Grid
            size={{ xs: 12, md: 5 }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Box
              sx={{
                bgcolor: "#fff",
                color: "#000",
                borderRadius: "32px",
                p: { xs: 3, md: 4 },
                minHeight: { xs: 480, md: 620 },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  letterSpacing: "-0.044em",
                  lineHeight: 1.1,
                  color: "#000",
                  mb: 2.5,
                }}
              >
                {whatIgwaDoesData.section2.features[1].title}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 1,
                  bgcolor: "rgba(0,0,0,0.12)",
                  mb: 2.5,
                }}
              />

              <Typography
                sx={{
                  color: "#767680",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.5,
                  letterSpacing: "-0.045em",
                  mb: 3,
                }}
              >
                {whatIgwaDoesData.section2.features[1].description}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  position: "relative",
                  height: 100,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 150,
                    height: 160,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/police/star.png"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "150px",
                      height: "160px",
                      objectFit: "contain",
                      opacity: 0.4,
                    }}
                  />
                  <Box
                    component="img"
                    src="/images/police/star2.png"
                    sx={{
                      position: "absolute",
                      top: "70px",
                      left: "75px",
                      width: "85px",
                      height: "85px",
                      objectFit: "contain",
                      opacity: 0.4,
                    }}
                  />
                  <Box
                    component="img"
                    src="/images/police/star2.png"
                    sx={{
                      position: "absolute",
                      top: "110px",
                      left: "12px",
                      width: "85px",
                      height: "85px",
                      objectFit: "contain",
                      opacity: 0.4,
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    position: "absolute",
                    right: -50,
                    bottom: 80,
                    fontWeight: 900,
                    fontSize: "5.5rem",
                    color: "#dedede",
                    letterSpacing: "-0.024em",
                    transform: "rotate(90deg)",
                    transformOrigin: "center",
                    lineHeight: 1,
                  }}
                >
                  IGWA
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#0171E3",
                  borderRadius: "32px",
                  p: 1,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                  minHeight: 298,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "rgba(244,244,244,0.08)",
                    borderRadius: "24px",
                    p: 3,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 220,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      letterSpacing: "-0.044em",
                      mb: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {whatIgwaDoesData.section2.features[0].title}
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      right: -15,
                      bottom: -15,
                      width: 160,
                      height: 170,
                    }}
                  >
                    <Image
                      src="/images/home/features/smart-fir-wand.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    flex: 1.1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      lineHeight: 1.5,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    {whatIgwaDoesData.section2.features[0].description}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderRadius: "32px",
                  p: 1,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                  minHeight: 298,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    position: "relative",
                    minHeight: 220,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      letterSpacing: "-0.044em",
                      mb: 2,
                    }}
                  >
                    {whatIgwaDoesData.section2.features[2].title}
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: 180,
                      height: 160,
                    }}
                  >
                    <Image
                      src="/images/home/features/case-diary-book.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1.1,
                    bgcolor: "#000",
                    borderRadius: "24px",
                    p: { xs: 3, sm: 3.5 },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      lineHeight: 1.5,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    {whatIgwaDoesData.section2.features[2].description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
