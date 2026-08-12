"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HumanInTheLoopSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 12, md: '180px', lg: '240px' },
        px: { xs: 3, sm: 6, md: '40px' },
        fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
            fontWeight: 400,
            fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.4rem', lg: '64px' },
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            fontFamily: 'inherit',
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          This is what{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            "Human in the loop"
          </Box>{' '}
          means at<br />
          IGWA, not a disclaimer, but the actual<br />
          architecture.
        </Typography>
      </Box>
    </Box>
  );
}
