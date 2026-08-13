import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ContactHeader() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: '#F5F5F5E5',
          fontWeight: 600,
          fontFamily: 'inherit',
          fontSize: '1.375rem',
          mb: 2,
        }}
        data-aos="fade-up"
      >
        CONTACT US
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          color: '#FFFFFF', 
          fontWeight: 900,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: { xs: '2.25rem', md: '4rem' },
          lineHeight: { xs: '1.2', md: '69px' },
          letterSpacing: { xs: '-1px', md: '-1.84px' },
          mb: 3
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Get in Touch with Us !
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#F5F5F5CC',
          fontSize: { xs: '1.125rem', md: '1.75rem' },
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 600,
          lineHeight: { xs: '1.4', md: '30px' },
          maxWidth: '1197px',
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Have a question, feedback, or need help ? We'd love to hear from you! <br />
        Fill out the form below or reach out directly using any of our contact details.
      </Typography>
    </Box>
  );
}
