"use client";

import { socialProofData as en_socialProofData } from "@/constants/genericData";
import { hindiSocialProofData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

// Individual avatar images replaced by static user-group image

export default function SocialProofSection() {
  const { language } = useLanguage();
  const socialProofData = language === 'hi' ? hindiSocialProofData : en_socialProofData;

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
              {socialProofData.title}
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
              {socialProofData.description1}

              {socialProofData.description2}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "18px" },
                lineHeight: "25px",
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {socialProofData.description3}

              {socialProofData.description4}

              {socialProofData.description5}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
