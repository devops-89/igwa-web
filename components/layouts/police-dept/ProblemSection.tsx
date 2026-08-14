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
        display: "inline-block",
        color: "#ff691f",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "uppercase",
        border: "1px solid rgba(255,105,31,0.3)",
        px: 2,
        py: 0.5,
        borderRadius: 20,
        backgroundColor: "rgba(255,105,31,0.1)",
        boxShadow: "0 0 15px rgba(255,105,31,0.2)", 
             
             
             
 
            mb: { xs: 2, md: '21px' },
            
            lineHeight: 1.5,
            
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
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", 
              
              
              
              
              
              
              
              
            }}
            data-aos-delay="100"
          />
        </Box>
        
        <Box sx={{ maxWidth: '1234px' }}>
          <Typography 
            variant="body1" 
            dangerouslySetInnerHTML={{ __html: description }}
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)", 
              
              
              
              
              
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
