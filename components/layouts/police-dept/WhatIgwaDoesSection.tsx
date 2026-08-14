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
    <Box id="features" sx={{ 
      py: { xs: 8, md: 15 }, 
      width: '100%',
      position: 'relative',
      "@keyframes pulseGlow": {
        "0%": { transform: "translate(-50%, 0) scale(1)", opacity: 0.5 },
        "100%": { transform: "translate(-50%, 0) scale(1.1)", opacity: 1 },
      },
      "@keyframes pulseGlowRight": {
        "0%": { transform: "scale(1)", opacity: 0.5 },
        "100%": { transform: "scale(1.1)", opacity: 1 },
      },
    }}>
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

      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
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
              <Typography variant="h3" sx={{ color: '#000000', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '28px', md: '48px' }, letterSpacing: '0px', lineHeight: 1.3, mb: '6px' }}>
                {title}
              </Typography>
              <Typography sx={{ color: 'rgba(0,0,0,0.4)', fontWeight: 400, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '16px', md: '24px' }, letterSpacing: '0px' }}>
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
                      <Typography sx={{ color: '#131111', fontWeight: 700, fontSize: { xs: '18px', md: '24px' }, lineHeight: 1.4, letterSpacing: '0px', fontFamily: '"DM Sans", sans-serif' }}>
                        • {feature.title}
                      </Typography>
                      <IconButton size="small" sx={{ color: '#131111' }}>
                        {isExpanded ? <CloseIcon /> : <AddIcon />}
                      </IconButton>
                    </Box>
                    
                    <Collapse in={isExpanded}>
                      {feature.details && (
                        <Typography sx={{ color: '#131111', fontWeight: 300, pl: '18px', pb: 2, fontSize: { xs: '16px', md: '20px' }, lineHeight: 1.5, letterSpacing: '0px', fontFamily: '"DM Sans", sans-serif' }}>
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
