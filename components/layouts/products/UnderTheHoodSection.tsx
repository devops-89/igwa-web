"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function UnderTheHoodSection() {
  return (
    <Box
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
            fontWeight: 700, 
            color: 'white', 
            mb: { xs: 2, md: '5px' },
            letterSpacing: '-2.4px',
            fontSize: { xs: '3rem', md: '88px' },
            lineHeight: { xs: 1.1, md: '100%' }
          }}
          data-aos="fade-up"
        >
          What's Actually Under the Hood
        </Typography>

        <Typography
          variant="h5"
          sx={{ 
            fontWeight: 600, 
            color: 'white', 
            mb: { xs: 5, md: '40px' },
            letterSpacing: '-1.44px',
            fontSize: { xs: '1.5rem', md: '35px' },
            lineHeight: { xs: 1.4, md: '28.8px' }
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The AI drafts. It never decides.
        </Typography>

        <Box sx={{ maxWidth: '850px', mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{ 
              fontWeight: 400, 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: { xs: 18, md: 24 },
              lineHeight: { xs: 1.4, md: '27px' },
              letterSpacing: '-1.08px',
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            IGWA's engine is built on one hard rule: no legal fact is ever freely generated. Every section number, citation, and statutory reference comes from a verified, versioned legal database — the AI's job is to find and explain it, not to invent it.
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
          Scroll to Explore
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
