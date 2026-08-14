"use client";

import { Box, Container, Typography } from '@mui/material';

interface ButtonProps {
  text: string;
  width?: string;
}

interface SharedBannerSectionProps {
  trailingTitle: string;
  trailingSubtitle: string;
  buttons: ButtonProps[];
  textAlign?: "left" | "center";
}

export default function SharedBannerSection({ trailingTitle, trailingSubtitle, buttons, textAlign = "left" }: SharedBannerSectionProps) {
  return (
    <Box sx={{ backgroundColor: '#000000', width: '100%', pt: { xs: 8, md: 15 }, pb: { xs: 8, md: 15 } }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: '1233px', width: '100%', textAlign: textAlign, px: { xs: 2, xl: 0 } }}>
          <Typography data-aos="fade-up" sx={{ maxWidth: '1137px', mx: textAlign === "center" ? "auto" : 0, color: '#FFFFFF', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '24px', md: '48px' }, lineHeight: { xs: 1.2, md: '52.8px' }, letterSpacing: '-2.4px', mb: '24px' }}>
            {trailingTitle}
          </Typography>
          <Typography data-aos="fade-up" data-aos-delay="100" sx={{ color: '#FFFFFF', fontWeight: 400, fontFamily: '"DM Sans", sans-serif', fontSize: { xs: '16px', md: '24px' }, lineHeight: { xs: 1.5, md: '27px' }, letterSpacing: '-1.08px', mb: '48px' }}>
            {trailingSubtitle}
          </Typography>
          
          <Box data-aos="fade-up" data-aos-delay="200" sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: textAlign === "center" ? "center" : "flex-start" }}>
            {buttons?.map((btn, index) => (
              <Box 
                key={index}
                component="button"
                sx={{ 
                  width: btn.width || 'auto',
                  height: '40px',
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(255, 255, 255, 0.24)', 
                  color: '#FFFFFF', 
                  border: 'none',
                  borderRadius: '100px',
                  padding: '10px 24px 10px 20px',
                  fontSize: '14px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 0.25)',
                  transition: 'background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.35)' }
                }}
              >
                {btn.text}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
