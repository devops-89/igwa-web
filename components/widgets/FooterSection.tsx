"use client";

import { hindiFooterData } from "@/constants/hindiGenericData";
import { footerData as en_footerData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { COLORS } from "@/lib/enum";

export default function FooterSection() {
  const { language } = useLanguage();
  const footerData = language === 'hi' ? hindiFooterData : en_footerData;

  const FOOTER_LINKS = [
    [
      footerData.productLinks[0],
      footerData.productLinks[1],
      footerData.productLinks[2],
      footerData.securityTitle,
    ],
    [
      footerData.legalLinks[0],
      footerData.securityLinks[1],
      footerData.securityLinks[2],
      footerData.securityLinks[0],
    ],
    footerData.contactLinks,
  ];

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {FOOTER_LINKS.map((column, colIndex) => (
            <Grid key={colIndex} size={{ xs: 12, sm: 4 }}>
              {column.map((link) => (
                <MuiLink
                  key={link}
                  href="#"
                  underline="none"
                  sx={{
                    display: "block",
                    color: COLORS.WHITE,
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    letterSpacing: "-0.045em",
                    lineHeight: 2,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  {link}
                </MuiLink>
              ))}
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "-0.05em",
              mb: 3,
            }}
          >
            {footerData.tagline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "1.25rem" },
              letterSpacing: "-0.05em",
              color: COLORS.WHITE_90,
              maxWidth: 900,
              mx: "auto",
              lineHeight: 1.14,
            }}
          >
            {footerData.importantNotice1} {footerData.importantNotice2} {footerData.importantNotice3}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "8rem", sm: "12rem", md: "18rem", lg: "24rem" },
            letterSpacing: "-0.024em",
            textAlign: "center",
            lineHeight: 0.85,
            mb: 4,
            overflow: "hidden",
          }}
        >
          IGWA
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "-0.05em",
            textAlign: "right",
            color: COLORS.WHITE_90,
          }}
        >
          {footerData.copyright}
        </Typography>
      </Container>
    </Box>
  );
}
