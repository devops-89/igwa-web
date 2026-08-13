"use client";
import { Box, Typography } from '@mui/material';

export default function HumanInTheLoopSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 8, sm: 12, md: '180px', lg: '240px' },
        px: { xs: 2, sm: 4, md: '40px' },
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
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
            fontSize: { xs: '2rem', sm: '2.5rem', md: '56px', lg: '64px' },
            lineHeight: 1.25,
            letterSpacing: '-2.4px',
            color: '#FFFFFF',
            textAlign: 'center',
            display: 'inline-block',
          }}
          data-aos="fade-up"
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
          means at<Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
          IGWA, not a disclaimer, but the actual<Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
          architecture.
        </Typography>
      </Box>
    </Box>
  );
}
