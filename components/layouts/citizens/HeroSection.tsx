"use client";

import { hindiCitizensHeroData } from "@/constants/hindiGenericData";
import { citizensHeroData as en_citizensHeroData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Container, Typography } from '@mui/material';

export default function HeroSection() {
  const { language } = useLanguage();
  const citizensHeroData = language === 'hi' ? hindiCitizensHeroData : en_citizensHeroData;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Hero Background */}
      <Box 
        sx={{ 
          height: { xs: 'auto', md: '1060px' },
          minHeight: { xs: '100vh', md: '1060px' },
          width: '100%',
          backgroundImage: 'url(/images/citizens/herosection.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.16) 16%, rgba(0,0,0,1) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container sx={{ maxWidth: '1233px !important', position: 'relative', zIndex: 2, pt: '40px', px: { xs: 2, xl: 0 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          {/* Main Content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', pt: { xs: '150px', md: '426px' } }}>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: { xs: '48px', md: '88px' }, fontFamily: '"DM Sans", sans-serif', maxWidth: '731px', letterSpacing: '0px', lineHeight: 1.2, mb: { xs: 3, md: '14px' } }}>
              {citizensHeroData.title}
            </Typography>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '18px', fontFamily: '"DM Sans", sans-serif', maxWidth: '932px', letterSpacing: '0px', lineHeight: 1.4, mb: { xs: 3, md: '44px' } }}>
              {citizensHeroData.subtitle}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400, fontSize: '16px', fontFamily: '"DM Sans", sans-serif', maxWidth: '832px', mx: 'auto', mb: { xs: 5, md: '87px' }, lineHeight: 1.5, letterSpacing: '0px' }}>
              {citizensHeroData.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', mb: { xs: 5, md: '57px' } }}>
              <Box 
                component="button"
                sx={{ 
                  width: '173px',
                  height: '40px',
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(255, 255, 255, 0.24)', 
                  color: '#FFFFFF', 
                  border: 'none',
                  borderRadius: '100px',
                  padding: '10px 24px 10px 20px',
                  fontSize: '14px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 0.25)',
                  transition: 'background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.35)' }
                }}
              >
                {citizensHeroData.buttons[0].text}
              </Box>
              <Box 
                component="button"
                sx={{ 
                  width: '163px',
                  height: '40px',
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(255, 255, 255, 0.24)', 
                  color: '#FFFFFF', 
                  border: 'none',
                  borderRadius: '100px',
                  padding: '10px 24px 10px 20px',
                  fontSize: '14px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 0.25)',
                  transition: 'background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.35)' }
                }}
              >
                {citizensHeroData.buttons[1].text}
              </Box>
            </Box>
          </Box>

          {/* Scroll to Explore */}
          <Box sx={{ pb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '14px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '0.5px' }}>
              {citizensHeroData.scrollText}
            </Typography>
            <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowDownwardIcon sx={{ color: 'white', fontSize: '16px' }} />
            </Box>
          </Box>
          
        </Container>
      </Box>
    </Box>
  );
}
