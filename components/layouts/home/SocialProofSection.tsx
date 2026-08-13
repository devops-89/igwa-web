"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid } from "@mui/material";
import { hindiSocialProofData } from "@/constants/hindiGenericData";

// Individual avatar images replaced by static user-group image

export default function SocialProofSection() {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 420,
                mx: { xs: "auto", md: 0 },
                aspectRatio: "1",
              }}
            >
              <Image
                src="/images/home/user-group.png"
                alt="User Group"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "50px" },
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              {hindiSocialProofData.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "20px" },
                lineHeight: 1.125,
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
                mb: 3,
              }}
            >
              {hindiSocialProofData.description1}

              {hindiSocialProofData.description2}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "18px" },
                lineHeight: "25px",
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {hindiSocialProofData.description3}

              {hindiSocialProofData.description4}

              {hindiSocialProofData.description5}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
