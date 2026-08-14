"use client";
import { hindiContactUsInfoData } from "@/constants/hindiGenericData";
import { contactUsInfoData as en_contactUsInfoData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactInfo() {
  const { language } = useLanguage();
  const contactUsInfoData = language === 'hi' ? hindiContactUsInfoData : en_contactUsInfoData;

  const iconContainerStyle = {
    backgroundColor: 'transparent',
    color: '#F5F5F5',
    width: 52,
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid #F5F5F5', // Assuming a border or they are just icons. Actually, the figma doesn't specify bg for icon, let's keep it simple.
    borderRadius: '50%'
  };

  const glassButtonStyle = {
    background: '#FFFFFF3D',
    boxShadow: 'inset 0px 0px 8px 0px #FFFFFF40',
    backdropFilter: 'blur(5px)',
    color: '#FFFFFF',
    textTransform: 'none',
  };

  return (
    <Box 
      sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        columnGap: 4, 
        rowGap: { xs: 3, md: 4 }, 
        pb: 10 
      }}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* 1. Office hours (Left Top) */}
      <Typography
        data-aos="fade-up"
        sx={{
          gridColumn: { xs: '1 / -1', md: '1 / 2' },
          gridRow: { md: '1 / 2' },
          color: '#F5F5F5',
          fontWeight: 600,
          fontFamily: 'inherit',
          fontSize: { xs: '1.375rem', md: '1.6875rem' },
          height: { xs: 'auto', md: '55px' },
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          pb: { xs: 0, md: 1 }
        }}
      >
        {contactUsInfoData.officeHoursTitle}
      </Typography>

      {/* 2. Date/Time (Right Top on desktop, immediately under heading on mobile) */}
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
          gridColumn: { xs: '1 / -1', md: '2 / 3' },
          gridRow: { md: '1 / 2' },
          color: '#F5F5F5',
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontSize: { xs: '1.125rem', md: '1.3125rem' },
          fontWeight: 400,
          height: { xs: 'auto', md: '55px' },
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          pb: { xs: 0, md: 1 }
        }}
      >
        {contactUsInfoData.officeHoursTime}
      </Typography>

      {/* 3. Phone (Left Middle) */}
      <Box data-aos="fade-up" data-aos-delay="200" sx={{ 
        gridColumn: { xs: '1 / -1', md: '1 / 2' },
        gridRow: { md: '2 / 3' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <CallIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
          {contactUsInfoData.phone}
        </Typography>
      </Box>

      {/* 4. Mail (Left Bottom) */}
      <Box data-aos="fade-up" data-aos-delay="300" sx={{ 
        gridColumn: { xs: '1 / -1', md: '1 / 2' },
        gridRow: { md: '3 / 4' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <EmailIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
          {contactUsInfoData.email}
        </Typography>
      </Box>

      {/* 5. Location (Right Middle) */}
      <Box data-aos="fade-up" data-aos-delay="400" sx={{ 
        gridColumn: { xs: '1 / -1', md: '2 / 3' },
        gridRow: { md: '2 / 3' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <LocationOnIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
            {contactUsInfoData.officeName}
          </Typography>
          <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 400, fontSize: '1.125rem' }}>
            {contactUsInfoData.officeLocation}
          </Typography>
        </Box>
      </Box>

      {/* 6. Button (Right Bottom) */}
      <Box data-aos="zoom-in" data-aos-delay="500" sx={{ 
        gridColumn: { xs: '1 / -1', md: '2 / 3' },
        gridRow: { md: '3 / 4' },
        alignSelf: 'start' 
      }}>
        <Button
          variant="contained"
          disableElevation
          fullWidth
          sx={{
            ...glassButtonStyle,
            borderRadius: '100px',
            py: '10px',
            fontSize: '1.125rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            '&:hover': {
              background: '#FFFFFF50'
            }
          }}
        >
          {contactUsInfoData.buttonText}
        </Button>
      </Box>
    </Box>
  );
}
