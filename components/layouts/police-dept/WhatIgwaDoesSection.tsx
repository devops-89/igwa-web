"use client";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Collapse, Container, Divider, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

interface Feature {
  title: string;
  details: string;
}

interface ButtonProps {
  text: string;
  width?: string;
}

interface WhatIgwaDoesSectionProps {
  features: Feature[];
  title: string;
  subtitle: string;
  trailingTitle: string;
  trailingSubtitle: string;
  buttons?: ButtonProps[];
}

export default function WhatIgwaDoesSection({ features, title, subtitle, trailingTitle, trailingSubtitle, buttons }: WhatIgwaDoesSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // OCR-powered intake expanded by default

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box sx={{ backgroundColor: '#000000', py: { xs: 8, md: 15 }, width: '100%' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Main White Card */}
        <Box 
          sx={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '46px',
            width: '100%',
            maxWidth: '1233px',
            minHeight: { xs: 'auto', md: '758px' },
            position: 'relative',
            p: { xs: 4, md: 8 },
            pb: { xs: 12, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Stars absolute positioned at top left */}
          <Box 
            component="img" 
            src="/images/police/star.png" 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '175px', 
              height: '191px', 
              objectFit: 'contain',
              zIndex: 1,
              opacity: 0.4
            }} 
          />
          <Box 
            component="img" 
            src="/images/police/star2.png" 
            sx={{ 
              position: 'absolute', 
              top: '80px', 
              left: '88px', 
              width: '99px', 
              height: '100px', 
              objectFit: 'contain',
              zIndex: 1,
              opacity: 0.4
            }} 
          />
          <Box 
            component="img" 
            src="/images/police/star2.png" 
            sx={{ 
              position: 'absolute', 
              top: '130px', 
              left: '14px', 
              width: '99px', 
              height: '100px', 
              objectFit: 'contain',
              zIndex: 1,
              opacity: 0.4
            }} 
          />
          
          {/* Features Of IGWA Graphic (Absolute Bottom Left) */}
          <Box sx={{ position: 'absolute', bottom: { xs: '-10px', md: '-30px' }, left: { xs: '20px', md: '20px' }, zIndex: 0, opacity: 0.5 }}>
            <Typography sx={{ color: '#7D7D7D', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '32px', md: '48px' }, lineHeight: { xs: 1.2, md: '52.8px' }, letterSpacing: '-2.4px', zIndex: 2, position: 'relative', mb: { xs: '-10px', md: '-20px' }, ml: '12px' }}>
              Features Of
            </Typography>
            <Typography sx={{ color: '#DEDEDE', fontWeight: 900, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '80px', md: '180px' }, lineHeight: 1, letterSpacing: '-2.4px' }}>
              IGWA
            </Typography>
          </Box>
          
          {/* Right Side - Accordion List */}
          <Box sx={{ width: '100%', maxWidth: '634px', ml: 'auto', mt: { xs: 6, md: 0 }, zIndex: 2, position: 'relative' }}>
            <Box sx={{ mb: '21px' }}>
              <Typography variant="h3" data-aos="fade-up" sx={{ color: '#000000', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '28px', md: '48px' }, letterSpacing: '-2.4px', lineHeight: { xs: 1.2, md: '52.8px' }, mb: '6px' }}>
                {title}
              </Typography>
              <Typography data-aos="fade-up" data-aos-delay="100" sx={{ color: 'rgba(0,0,0,0.4)', fontWeight: 400, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '16px', md: '24px' }, letterSpacing: '-1.08px' }}>
                {subtitle}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {features.map((feature, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <Box key={index}>
                    <Box 
                      onClick={() => handleToggle(index)}
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        cursor: 'pointer',
                        py: 2
                      }}
                    >
                      <Typography sx={{ color: '#131111', fontWeight: 700, fontSize: { xs: '18px', md: '24px' }, lineHeight: { xs: 1.4, md: '28.8px' }, letterSpacing: '0.6px', fontFamily: '"DM Sans", sans-serif' }}>
                        • {feature.title}
                      </Typography>
                      <IconButton size="small" sx={{ color: '#131111' }}>
                        {isExpanded ? <CloseIcon /> : <AddIcon />}
                      </IconButton>
                    </Box>
                    
                    <Collapse in={isExpanded}>
                      {feature.details && (
                        <Typography sx={{ color: '#131111', fontWeight: 300, pl: '18px', pb: 2, fontSize: { xs: '16px', md: '20px' }, lineHeight: { xs: 1.5, md: '28.8px' }, letterSpacing: '0.6px', fontFamily: '"DM Sans", sans-serif' }}>
                          {feature.details}
                        </Typography>
                      )}
                    </Collapse>
                    
                    <Divider sx={{ borderColor: '#E5E5E5' }} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
