"use client";

import { Box, Container, Grid, Typography } from '@mui/material';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
  image: string;
  heading?: string;
}

export default function HowItWorksSection({ steps, image, heading }: HowItWorksSectionProps) {
  return (
    <Box id="how-it-works" sx={{ 
      py: { xs: 8, md: 15 }, 
      width: '100%', 
      position: 'relative', 
      minHeight: { xs: 'auto', md: '1000px' }, 
      display: 'flex', 
      alignItems: 'center',
        "@keyframes pulseGlow": {
          "0%": { transform: "translate(-50%, 0) scale(1)", opacity: 0.5 },
          "100%": { transform: "translate(-50%, 0) scale(1.1)", opacity: 1 },
        },
        "@keyframes pulseGlowRight": {
          "0%": { transform: "scale(1)", opacity: 0.5 },
          "100%": { transform: "scale(1.1)", opacity: 1 },
        },
      }}
    >
      {/* High-Tech Glowing Orbs - Police Dept (Red/Blue) */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "60vw",
          height: "40vw",
          background: "radial-gradient(ellipse, rgba(239,68,68,0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
          animation: "pulseGlow 6s infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

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
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", 
                   
                   
                  mb: 4,
                  
                  
                  
                }}
                data-aos="fade-right"
              >
                {heading || 'How it works'}
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
                        lineHeight: 1.4,
                        letterSpacing: '0px'
                      }}
                      data-aos="fade-up"
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        fontWeight: 200,
                        lineHeight: 1.5,
                        fontSize: { xs: '16px', md: '24px' },
                        letterSpacing: '0px'
                      }}
                      data-aos="fade-up"
                      data-aos-delay="100"
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
