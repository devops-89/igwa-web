"use client";

import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        pt: 15,
        pb: 5,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 800, 
            mb: 3, 
            lineHeight: 1.05, 
            letterSpacing: '-0.04em', 
            fontSize: { xs: '3rem', md: '5.5rem' },
            fontFamily: "inherit"
          }}
        >
          Paperwork, Drafted Faster.<br />
          Investigation, Uninterrupted.
        </Typography>

        <Box sx={{ maxWidth: '850px', mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400, 
              color: 'rgba(255,255,255,0.95)', 
              fontSize: { xs: '1rem', md: '1.15rem' }, 
              lineHeight: 1.6,
              fontFamily: "inherit"
            }}
          >
            IGWA is an AI-assisted platform that helps police officers turn a citizen's statement into a legally sound FIR, daily case diary, and chargesheet — grounded in the Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 — in minutes, not hours.
          </Typography>
        </Box>

        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            mb: 5, 
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.75rem',
            fontFamily: "inherit"
          }}
        >
          Every AI-drafted document is reviewed and approved by the officer before it carries any legal weight.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 8, justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<AppleIcon fontSize="large" />}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              textTransform: 'none',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              boxShadow: 'none'
            }}
          >
            <Box sx={{ textAlign: 'left', ml: 1, fontFamily: "inherit" }}>
              <Typography variant="caption" sx={{ display: 'block', lineHeight: 1, fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', fontFamily: "inherit" }}>Download on the</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700, lineHeight: 1.2, fontFamily: "inherit" }}>App Store</Typography>
            </Box>
          </Button>

          <Button
            variant="contained"
            startIcon={<PlayArrowIcon fontSize="large" />}
            sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              textTransform: 'none',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              boxShadow: 'none'
            }}
          >
            <Box sx={{ textAlign: 'left', ml: 1, fontFamily: "inherit" }}>
              <Typography variant="caption" sx={{ display: 'block', lineHeight: 1, fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', fontFamily: "inherit" }}>Get it on</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700, lineHeight: 1.2, fontFamily: "inherit" }}>Google Play</Typography>
            </Box>
          </Button>
        </Stack>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.8 }}>
          <Typography variant="caption" sx={{ mb: 1, fontFamily: "inherit" }}>Scroll to Explore</Typography>
          <Box 
            sx={{ 
              border: '1px solid rgba(255,255,255,0.4)', 
              borderRadius: '50%', 
              p: 0.5, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              animation: 'float 2s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(6px)' },
              }
            }}
          >
            <ArrowDownwardIcon fontSize="small" sx={{ opacity: 0.8 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
