"use client";

import { Box, Container, Typography } from '@mui/material';

interface ProblemSectionProps {
  overline: string;
  title: string;
  description: string;
}

export default function ProblemSection({ overline, title, description }: ProblemSectionProps) {
  return (
    <Box sx={{ backgroundColor: '#000000', pt: { xs: '120px', md: '253px' }, pb: { xs: 8, md: 15 }, width: '100%' }}>
      <Container sx={{ maxWidth: '1233px !important', px: { xs: 2, xl: 0 } }}>
        <Typography 
          variant="overline" 
          data-aos="fade-down"
          sx={{ 
            color: 'white', 
            letterSpacing: '0px', 
            fontWeight: 400, 
            display: 'block', 
            mb: { xs: 2, md: '21px' },
            fontSize: { xs: '16px', md: '24px' },
            lineHeight: 1.5,
            textTransform: 'none'
          }}
        >
          {overline}
        </Typography>
        
        <Box sx={{ mb: { xs: 4, md: '66px' } }}>
          <Typography 
            variant="h2" 
            component="h2" 
            dangerouslySetInnerHTML={{ __html: title }}
            data-aos="fade-up"
            sx={{ 
              color: 'white', 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '48px' }, 
              letterSpacing: '0px',
              lineHeight: 1.3
            }}
          />
        </Box>
        
        <Box sx={{ maxWidth: '1234px' }}>
          <Typography 
            variant="body1" 
            dangerouslySetInnerHTML={{ __html: description }}
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{ 
              color: 'white', 
              fontSize: { xs: '1.125rem', md: '24px' }, 
              lineHeight: 1.5,
              letterSpacing: '0px',
              fontWeight: 400
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
