"use client";

import { productsUnderTheHoodData as en_productsUnderTheHoodData } from "@/constants/genericData";
import { hindiProductsUnderTheHoodData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Container, Typography } from '@mui/material';

export default function UnderTheHoodSection() {
  const { language } = useLanguage();
  const productsUnderTheHoodData = language === 'hi' ? hindiProductsUnderTheHoodData : en_productsUnderTheHoodData;

  return (
    <Box
      id="under-the-hood"
      sx={{
        width: '100%',
        minHeight: { xs: '100vh', md: '1025px' },
        backgroundImage: 'url(/images/product1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Base dark overlay
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.31) 0%, rgba(0,0,0,0.16) 16%, rgba(0,0,0,0.16) 70%, rgba(0,0,0,1) 100%)', // Fade gradient
          zIndex: 1
        }
      }}
    >
      {/* Centered Content Overlay */}
      <Container
        maxWidth="lg"
        sx={{ maxWidth: '1233px !important', position: 'relative', zIndex: 2, pt: { xs: '150px', md: '350px' }, px: { xs: 2, xl: 0 } }}
      >
        <Typography
          variant="h1"
          sx={{ 
            fontWeight: 800, 
            color: 'white', 
            mb: { xs: 2, md: '5px' },
            letterSpacing: '0px',
            fontSize: { xs: '3rem', md: '88px' },
            lineHeight: 1.2
          }}
          data-aos="fade-up"
        >
          {productsUnderTheHoodData.title}
        </Typography>

        <Typography
          variant="h5"
          sx={{ 
            fontWeight: 800, 
            color: 'white', 
            mb: { xs: 5, md: '40px' },
            letterSpacing: '0px',
            fontSize: '18px',
            lineHeight: 1.4
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {productsUnderTheHoodData.subtitle}
        </Typography>

        <Box sx={{ maxWidth: '850px', mx: 'auto' }}>
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
            {productsUnderTheHoodData.description}
          </Typography>
        </Box>
      </Container>

      {/* Bottom Scroll Indicator */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          zIndex: 2,
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
          '&:hover': { opacity: 1 }
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.02em',
            fontFamily: 'inherit',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
        >
          {productsUnderTheHoodData.scrollText}
        </Typography>
        <Box
          sx={{
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            p: 0.6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'bounceFloat 2s ease-in-out infinite',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            '@keyframes bounceFloat': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(7px)' },
            }
          }}
        >
          <ArrowDownwardIcon fontSize="small" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }} />
        </Box>
      </Box>
    </Box>
  );
}
