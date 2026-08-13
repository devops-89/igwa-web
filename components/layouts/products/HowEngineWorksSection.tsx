"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

const steps = [
  {
    title: 'Classification, not generation',
    description:
      'Incoming descriptions are matched against a structured legal database to identify likely applicable sections; nothing is produced from the model\'s own "knowledge" of the law.',
  },
  {
    title: 'Retrieval with citations',
    description:
      'Every section shown links back to its exact source and version, so it can always be traced and verified.',
  },
  {
    title: 'Drafting, within limits',
    description:
      'The AI composes clear, structured language for FIRs, diary entries, and chargesheets, using only confirmed facts and citations, never invented ones',
  },
  {
    title: 'Full audit logging',
    description:
      'Every input, retrieval, and generated draft is recorded, along with every human edit made on top of it.',
  },
];

export default function HowEngineWorksSection() {
  return (
    <Box sx={{ backgroundColor: '#000000', py: { xs: 8, md: 15 }, width: '100%', position: 'relative', minHeight: { xs: 'auto', md: '1000px' }, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Desktop Absolute Track & Sticky Image */}
      <Box sx={{ 
        position: 'absolute', 
        top: '120px', 
        bottom: 0, 
        right: 0, 
        width: { xs: '0', lg: '547px' }, 
        display: { xs: 'none', lg: 'block' }, 
        zIndex: 1 
      }}>
        <Box 
          component="img"
          src="/images/product2.png"
          alt="IGWA Engine"
          sx={{
            position: 'sticky',
            top: '120px',
            width: '100%',
            height: 'auto',
          }}
          data-aos="fade-left"
        />
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Left Column - Timeline */}
          <Box sx={{ width: { xs: '100%', lg: '58.333%' }, px: { xs: 2, lg: 4 }, order: { xs: 2, lg: 1 } }}>
            <Box sx={{ mb: { xs: 6, md: 10 }, ml: { xs: 2, md: '44px' } }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#FFFFFF', 
                  fontWeight: 700, 
                  mb: 4,
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: { xs: 1.2, md: '52.8px' },
                  letterSpacing: '-2.4px'
                }}
                data-aos="fade-right"
              >
                How the engine works
              </Typography>
              <Box sx={{ width: '100%', maxWidth: '660px', height: '1px', backgroundColor: '#FFFFFF' }} />
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', pl: { xs: 2, md: '44px' } }}>
              {/* Continuous vertical line */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: '26px',
                  bottom: 0, 
                  left: { xs: '21px', md: '49px' },
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
                        mb: 1,
                        fontSize: { xs: 18, md: 24 },
                        lineHeight: { xs: 1.4, md: '27px' },
                        letterSpacing: '-1.08px'
                      }}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.72)', 
                        fontWeight: 400,
                        lineHeight: { xs: 1.4, md: '27px' },
                        fontSize: { xs: 18, md: 24 },
                        letterSpacing: '-1.08px',
                        maxWidth: '520px'
                      }}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100 + 50}`}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Column - Image Spacer on Desktop */}
          <Box sx={{ width: { xs: '100%', lg: '41.666%' }, px: { xs: 2, lg: 0 }, order: { xs: 1, lg: 2 } }}>
            <Box 
              component="img"
              src="/images/product2.png"
              alt="IGWA Engine"
              sx={{
                width: '100%',
                maxWidth: '547px',
                height: 'auto',
                display: { xs: 'block', lg: 'none' }, // Hide on desktop since absolute image is used
                margin: '0 auto',
                mb: { xs: 6, lg: 0 }
              }}
              data-aos="fade-left"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
