"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WhyThisMattersSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 10, md: 16 },
        px: { xs: 3, sm: 6, md: '95px', lg: '119px' },
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
        {/* Top Tagline / Small Label */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '0.95rem', md: '1.15rem' },
            color: 'rgba(255, 255, 255, 0.85)',
            mb: 2.5,
            fontFamily: 'inherit',
            letterSpacing: '-0.01em',
          }}
        >
          Why this matters
        </Typography>

        {/* Main Heading with Line Break */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.2rem', lg: '4.8rem' },
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
            mb: { xs: 3, md: 5 },
            fontFamily: 'inherit',
            maxWidth: '920px',
          }}
        >
          In a legal document, "probably right"<br />
          isn't good enough.
        </Typography>

        {/* Paragraph Description */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.08rem', md: '1.2rem' },
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.75)',
            fontFamily: 'inherit',
            maxWidth: '780px',
          }}
        >
          A general-purpose AI model can produce a fluent, confident answer that's still legally wrong. IGWA's engine is deliberately constrained to prevent exactly that — it can only ever surface what's actually in the legal database, and it can never register, finalize, or file anything without an explicit human action.
        </Typography>
      </Box>
    </Box>
  );
}
