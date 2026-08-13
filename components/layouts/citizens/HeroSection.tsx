"use client";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Container, Typography } from '@mui/material';

export default function HeroSection() {
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
            <Typography data-aos="fade-up" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '40px', sm: '48px', md: '88px' }, fontFamily: '"DM Sans", sans-serif', maxWidth: '731px', letterSpacing: '-2.4px', lineHeight: { xs: 1.1, md: '52.8px' }, mb: { xs: 3, md: '14px' } }}>
              IGWA for Citizens
            </Typography>
            <Typography data-aos="fade-up" data-aos-delay="100" sx={{ color: '#FFFFFF', fontWeight: 500, fontSize: { xs: '20px', md: '35px' }, fontFamily: '"DM Sans", sans-serif', maxWidth: '932px', letterSpacing: '-1.44px', lineHeight: { xs: 1.4, md: '58.8px' }, mb: { xs: 3, md: '44px' } }}>
              Report what happened. We'll help you say it right.
            </Typography>
            <Typography data-aos="fade-up" data-aos-delay="200" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: { xs: '16px', md: '24px' }, fontFamily: '"DM Sans", sans-serif', maxWidth: '832px', mx: 'auto', mb: { xs: 5, md: '87px' }, lineHeight: { xs: 1.5, md: '28.8px' }, letterSpacing: '-1.44px' }}>
              You shouldn't need to know the law to report a crime. Describe it in your own words. IGWA handles the legal language and drafts your FIR application for you.
            </Typography>

            <Box data-aos="fade-up" data-aos-delay="300" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', mb: { xs: 5, md: '57px' } }}>
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
                Report an Incident
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
                See How It Works
              </Box>
            </Box>
          </Box>

          {/* Scroll to Explore */}
          <Box sx={{ pb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '14px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '0.5px' }}>
              Scroll to Explore
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
