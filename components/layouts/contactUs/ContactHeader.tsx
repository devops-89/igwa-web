"use client";
import { contactUsHeaderData as en_contactUsHeaderData } from "@/constants/genericData";
import { hindiContactUsHeaderData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

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
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", 
           
          
          fontFamily: '"DM Sans", sans-serif',
          
          mb: 3
        }}
        data-aos-delay="100"
      >
        {contactUsHeaderData.title}
      </Typography>
      <Typography 
        variant="body1" 
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)", 
          
          
          fontFamily: '"Be Vietnam Pro", sans-serif',
          

          maxWidth: '1197px',
        }}
        dangerouslySetInnerHTML={{ __html: contactUsHeaderData.description }}
      />
    </Box>
  );
}
