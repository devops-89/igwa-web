"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function UnderTheHoodSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '100vh', md: '1075px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 3, sm: 6, md: '95px' },
        pt: { xs: 16, md: '180px' },
        pb: { xs: 6, md: '52px' },
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.65) 100%), url(/images/product1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Centered Content Overlay */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my: 'auto'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' },
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#FFFFFF',
            fontFamily: 'inherit',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}
        >
          What's Actually Under the Hood
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: '1.2rem', md: '1.6rem' },
            color: 'rgba(255, 255, 255, 0.95)',
            fontFamily: 'inherit',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
          }}
        >
          The AI drafts. It never decides.
        </Typography>

        <Box sx={{ maxWidth: '850px', mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'inherit',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)'
            }}
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
