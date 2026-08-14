"use client";

import { productsWhyThisMattersData as en_productsWhyThisMattersData } from "@/constants/genericData";
import { hindiProductsWhyThisMattersData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Typography } from '@mui/material';

export default function WhyThisMattersSection() {
  const { language } = useLanguage();
  const productsWhyThisMattersData = language === 'hi' ? hindiProductsWhyThisMattersData : en_productsWhyThisMattersData;

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 4, md: '95px', lg: '119px' },
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
        {/* Top Tagline / Small Label */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 800,
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)',
            mb: 2.5,
            letterSpacing: '0px',
          }}
          data-aos="fade-up"
        >
          {productsWhyThisMattersData.overline}
        </Typography>

        {/* Main Heading with Line Break */}
        <Typography
          variant="h2"
          sx={{
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
            
            
            
            
            
            mb: { xs: 3, md: 5 },
            maxWidth: '920px',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {productsWhyThisMattersData.titlePart1}<br />
          {productsWhyThisMattersData.titlePart2}
        </Typography>

        {/* Paragraph Description */}
        <Typography
          variant="body1"
          sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)",
            
            }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {productsWhyThisMattersData.description}
        </Typography>
      </Box>
    </Box>
  );
}
