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
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 6, md: 4 },
      }}
    >
      <Container maxWidth="lg" data-aos="fade-up">
        {/* Top Links Section */}
        <Grid container spacing={4} sx={{ mb: { xs: 4, md: 8 } }}>
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
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 2.5,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  {link}
                </MuiLink>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Middle Disclaimer Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 900,
              mx: "auto",
              lineHeight: 1.5,
              mb: { xs: 4, md: 6 },
            }}
          >
            {hindiFooterData.importantNotice1} {hindiFooterData.importantNotice2} {hindiFooterData.importantNotice3}
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3.5rem" },
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: COLORS.WHITE,
            }}
          >
            {hindiFooterData.tagline}
          </Typography>
        </Box>

        {/* Bottom Massive Text & Copyright */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexWrap: { xs: "wrap", md: "nowrap" } }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "8rem", sm: "12rem", md: "16rem", lg: "22rem" },
              letterSpacing: "-0.05em",
              lineHeight: 0.75,
              color: COLORS.WHITE,
              whiteSpace: "nowrap",
            }}
          >
            IGWA
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              letterSpacing: "-0.02em",
              textAlign: { xs: "center", md: "left" },
              color: "rgba(255,255,255,0.7)",
              ml: { xs: 0, md: 3 },
              mb: { xs: 0, md: 3 },
              mt: { xs: 4, md: 0 },
              lineHeight: 1.4,
              whiteSpace: "nowrap",
            }}
          >
            कॉपीराइट © 2026<br/>
            IGWA. सर्वाधिकार सुरक्षित।
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
