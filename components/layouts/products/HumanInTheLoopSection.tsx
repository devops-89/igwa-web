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
      id="human-in-the-loop"
      sx={{
        color: '#FFFFFF',
        py: { xs: 8, sm: 12, md: '180px', lg: '240px' },
        px: { xs: 2, sm: 4, md: '40px' },
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        "@keyframes pulseGlow": {
          "0%": { transform: "translate(-50%, 0) scale(1)", opacity: 0.5 },
          "100%": { transform: "translate(-50%, 0) scale(1.1)", opacity: 1 },
        },
        "@keyframes pulseGlowRight": {
          "0%": { transform: "scale(1)", opacity: 0.5 },
          "100%": { transform: "scale(1.1)", opacity: 1 },
        },
        alignItems: 'center',
      }}
    >
      {/* High-Tech Glowing Orbs - Products (Purple/Pink) */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "60vw",
          height: "40vw",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
          animation: "pulseGlow 6s infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: '100%',
          maxWidth: '1201px',
          mx: 'auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
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
