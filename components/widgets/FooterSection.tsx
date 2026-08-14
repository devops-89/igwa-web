"use client";

import { footerData as en_footerData, footerSitemapData as en_footerSitemapData } from "@/constants/genericData";
import { hindiFooterData, hindiFooterSitemapData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { COLORS } from "@/lib/enum";
import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";

export default function FooterSection() {
  const { language } = useLanguage();
  const footerData = language === 'hi' ? hindiFooterData : en_footerData;

  const sitemapData = language === 'hi' ? hindiFooterSitemapData : en_footerSitemapData;

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
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
          {sitemapData.map((column, colIndex) => (
            <Grid key={colIndex} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <MuiLink
                href={column.path}
                underline="none"
                sx={{
                  display: "block",
                  color: COLORS.WHITE,
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.02em",
                  mb: 2,
                  "&:hover": { opacity: 0.8 },
                }}
              >
                {column.title}
              </MuiLink>
              {column.links.map((link, idx) => (
                <MuiLink
                  key={idx}
                  href={`${column.path}${link.hash}`}
                  underline="none"
                  sx={{
                    display: "block",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 2,
                    mb: 1,
                    "&:hover": { color: COLORS.WHITE },
                  }}
                >
                  {link.name}
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
            {footerData.tagline}
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
