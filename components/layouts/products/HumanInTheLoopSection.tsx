"use client";

import { productsHumanInTheLoopData as en_productsHumanInTheLoopData } from "@/constants/genericData";
import { hindiProductsHumanInTheLoopData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Typography } from '@mui/material';

export default function HumanInTheLoopSection() {
  const { language } = useLanguage();
  const productsHumanInTheLoopData = language === 'hi' ? hindiProductsHumanInTheLoopData : en_productsHumanInTheLoopData;

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 8, sm: 12, md: '180px', lg: '240px' },
        px: { xs: 2, sm: 4, md: '40px' },
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
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
            
            
            
            
            
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
