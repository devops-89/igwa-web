"use client";
import { hindiContactUsHeaderData } from "@/constants/hindiGenericData";
import { contactUsHeaderData as en_contactUsHeaderData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ContactHeader() {
  const { language } = useLanguage();
  const contactUsHeaderData = language === 'hi' ? hindiContactUsHeaderData : en_contactUsHeaderData;

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="subtitle2"
        data-aos="fade-down"
        sx={{
          color: '#F5F5F5E5',
          fontWeight: 600,
          fontFamily: 'inherit',
          fontSize: '1.375rem',
          mb: 2,
        }}
      >
        {contactUsHeaderData.overline}
      </Typography>
      <Typography 
        variant="h2" 
        data-aos="fade-up"
        sx={{ 
          color: '#FFFFFF', 
          fontWeight: 900,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: { xs: '2.25rem', md: '4rem' },
          lineHeight: { xs: '1.2', md: '69px' },
          letterSpacing: { xs: '-1px', md: '-1.84px' },
          mb: 3
        }}
      >
        {contactUsHeaderData.title}
      </Typography>
      <Typography 
        variant="body1" 
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{ 
          color: '#F5F5F5CC',
          fontSize: { xs: '1.125rem', md: '1.75rem' },
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 600,
          lineHeight: { xs: '1.4', md: '30px' },
          maxWidth: '1197px',
        }}
        dangerouslySetInnerHTML={{ __html: contactUsHeaderData.description }}
      />
    </Box>
  );
}
