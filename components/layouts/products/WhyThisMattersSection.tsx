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
            fontSize: { xs: '16px', md: '24px' },
            color: 'rgba(255, 255, 255, 0.85)',
            mb: 2.5,
            letterSpacing: '-1.08px',
          }}
          data-aos="fade-up"
        >
          Why this matters
        </Typography>

        {/* Main Heading with Line Break */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '48px' },
            lineHeight: { xs: 1.2, md: '52.8px' },
            letterSpacing: '-2.4px',
            color: '#FFFFFF',
            mb: { xs: 3, md: 5 },
            maxWidth: '920px',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          In a legal document, "probably right"<br />
          isn't good enough.
        </Typography>

        {/* Paragraph Description */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: 18, md: 24 },
            lineHeight: { xs: 1.4, md: '27px' },
            letterSpacing: '-1.08px',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '780px',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A general-purpose AI model can produce a fluent, confident answer that's still legally wrong. IGWA's engine is deliberately constrained to prevent exactly that — it can only ever surface what's actually in the legal database, and it can never register, finalize, or file anything without an explicit human action.
        </Typography>
      </Box>
    </Box>
  );
}
