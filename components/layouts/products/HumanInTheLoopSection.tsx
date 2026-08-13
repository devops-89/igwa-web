"use client";

import { hindiProductsHumanInTheLoopData } from "@/constants/hindiGenericData";
import { productsHumanInTheLoopData as en_productsHumanInTheLoopData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HumanInTheLoopSection() {
  const { language } = useLanguage();
  const productsHumanInTheLoopData = language === 'hi' ? hindiProductsHumanInTheLoopData : en_productsHumanInTheLoopData;

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 12, md: '180px', lg: '240px' },
        px: { xs: 3, sm: 6, md: '40px' },
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1201px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '64px' },
            lineHeight: 1.25,
            letterSpacing: '0px',
            color: '#FFFFFF',
            textAlign: 'center',
            display: 'inline-block',
          }}
          data-aos="fade-up"
        >
          {productsHumanInTheLoopData.part1}{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 900,
              color: '#FFFFFF',
            }}
          >
            {productsHumanInTheLoopData.highlight}
          </Box>{' '}
          {productsHumanInTheLoopData.part2}<br />
          {productsHumanInTheLoopData.part3}<br />
          {productsHumanInTheLoopData.part4}
        </Typography>
      </Box>
    </Box>
  );
}
