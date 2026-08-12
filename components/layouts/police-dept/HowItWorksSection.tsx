"use client";

import { Box, Container, Grid, Typography } from '@mui/material';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
  image: string;
}

export default function HowItWorksSection({ steps, image }: HowItWorksSectionProps) {
  return (
    <Box sx={{ backgroundColor: '#000000', py: { xs: 8, md: 15 }, width: '100%', position: 'relative', minHeight: { xs: 'auto', md: '1000px' }, display: 'flex', alignItems: 'center' }}>
      {/* Desktop Absolute Track & Sticky Image */}
      <Box sx={{ 
        position: 'absolute', 
        top: '120px', 
        bottom: 0, 
        left: 0, 
        width: '547px', 
        display: { xs: 'none', md: 'block' }, 
        zIndex: 1 
      }}>
        <Box 
          component="img"
          src={image}
          alt="IGWA Mobile App"
          sx={{
            position: 'sticky',
            top: '120px', // Sticks when the top of the image reaches 120px from top of screen
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          {/* Left Column - Image Spacer on Desktop */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box 
              component="img"
              src="/images/police/iphone.png"
              alt="IGWA Mobile App"
              sx={{
                width: '100%',
                maxWidth: '547px',
                height: 'auto',
                display: { xs: 'block', md: 'none' }, // Hide on desktop since absolute image is used
                margin: '0 auto'
              }}
            />
          </Grid>
          
          {/* Right Column - Timeline */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: { xs: 6, md: 10 }, ml: { xs: 2, md: '44px' } }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#FFFFFF', 
                  fontWeight: 700, 
                  mb: 4,
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: { xs: 1.2, md: '52.8px' }
                }}
              >
                How it works
              </Typography>
              <Box sx={{ width: '100%', maxWidth: '660px', height: '1px', backgroundColor: '#FFFFFF' }} />
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* Continuous vertical line */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: '26px',
                  bottom: 0, // Allow line to continue down past the last dot
                  left: '5px',
                  width: '2px',
                  backgroundColor: '#FFFFFF',
                  zIndex: 0
                }} 
              />
              
              {steps.map((step, index) => (
                <Box key={index} sx={{ display: 'flex', mb: index !== steps.length - 1 ? { xs: 4, md: 8 } : 0, position: 'relative', zIndex: 1 }}>
                  {/* Dot */}
                  <Box sx={{ mr: { xs: 2, md: 4 }, mt: '20px' }}>
                    <Box 
                      sx={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        backgroundColor: '#FFFFFF' 
                      }} 
                    />
                  </Box>
                  
                  {/* Content */}
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#FFFFFF', 
                        fontWeight: 700, 
                        mb: 0,
                        fontSize: { xs: '20px', md: '28px' },
                        lineHeight: { xs: 1.4, md: '52.8px' },
                        letterSpacing: '-1px'
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        fontWeight: 200,
                        lineHeight: { xs: 1.5, md: '31.8px' },
                        fontSize: { xs: '16px', md: '24px' },
                        letterSpacing: '0.6px'
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
