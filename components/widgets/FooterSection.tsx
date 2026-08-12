"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { COLORS } from "@/lib/enum";
import { hindiFooterData } from "@/constants/hindiGenericData";

const FOOTER_LINKS = [
  [
    hindiFooterData.productLinks[0],
    hindiFooterData.productLinks[1],
    hindiFooterData.productLinks[2],
    hindiFooterData.securityTitle,
  ],
  [
    hindiFooterData.legalLinks[0],
    hindiFooterData.securityLinks[1],
    hindiFooterData.securityLinks[2],
    hindiFooterData.securityLinks[0],
  ],
  hindiFooterData.contactLinks,
];

export default function FooterSection() {
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
            {hindiFooterData.tagline}
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
            {hindiFooterData.importantNotice1} {hindiFooterData.importantNotice2} {hindiFooterData.importantNotice3}
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
          {hindiFooterData.copyright}
        </Typography>
      </Container>
    </Box>
  );
}
