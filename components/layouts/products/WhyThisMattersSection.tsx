"use client";

import { hindiProductsWhyThisMattersData } from "@/constants/hindiGenericData";
import { productsWhyThisMattersData as en_productsWhyThisMattersData } from "@/constants/genericData";
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
        px: { xs: 3, sm: 6, md: '95px', lg: '119px' },
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
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '48px' },
            lineHeight: 1.3,
            letterSpacing: '0px',
            color: '#FFFFFF',
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
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: 1.5,
            letterSpacing: '0px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '780px',
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
