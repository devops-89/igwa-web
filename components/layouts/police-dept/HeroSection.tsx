"use client";

import { hindiPoliceDeptHeroData } from "@/constants/hindiGenericData";
import { policeDeptHeroData as en_policeDeptHeroData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function HeroSection() {
  const { language } = useLanguage();
  const policeDeptHeroData = language === 'hi' ? hindiPoliceDeptHeroData : en_policeDeptHeroData;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Hero Background */}
      <Box 
        sx={{
          width: '100%',
          minHeight: { xs: '100vh', md: '1025px' },
          backgroundImage: 'url(/images/police/heroImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Base dark overlay
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.31) 0%, rgba(0,0,0,0.16) 16%, rgba(0,0,0,0.16) 70%, rgba(0,0,0,1) 100%)', // Fade gradient
            zIndex: 1
          }
        }}
      >
        <Container sx={{ maxWidth: '1233px !important', position: 'relative', zIndex: 2, pt: { xs: '150px', md: '454px' }, px: { xs: 2, xl: 0 } }}>
          <Typography 
            variant="h2" 
            component="h1" 
            data-aos="fade-down"
            sx={{ 
              fontWeight: 700, 
              color: 'white', 
              mb: { xs: 2, md: '5px' },
              letterSpacing: '0px',
              fontSize: { xs: '3rem', md: '88px' },
              lineHeight: 1.2
            }}
          >
            {policeDeptHeroData.title}
          </Typography>
          <Typography 
            variant="h5" 
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{ 
              fontWeight: 600, 
              color: 'white', 
              mb: { xs: 5, md: '59px' },
              letterSpacing: '0px',
              fontSize: { xs: '1.5rem', md: '35px' },
              lineHeight: 1.4
            }}
          >
            {policeDeptHeroData.subtitle}
          </Typography>
          <Typography 
            variant="body1" 
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              mb: '60px', 
              maxWidth: '884px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '24px' },
              lineHeight: 1.5
            }}
          >
            {policeDeptHeroData.description}
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ justifyContent: 'center', mb: 10 }} data-aos="zoom-in" data-aos-delay="300">
            <Button 
              variant="outlined" 
              sx={{ 
                width: 'auto',
                minWidth: '148px',
                height: '40px',
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.5)', 
                borderRadius: '16px',
                px: 3,
                py: '8px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19.2px',
                letterSpacing: '-0.8px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {policeDeptHeroData.buttons[0].text}
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                width: 'auto',
                minWidth: '165px',
                height: '40px',
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.5)', 
                borderRadius: '16px',
                px: 3,
                py: '8px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19.2px',
                letterSpacing: '-0.8px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {policeDeptHeroData.buttons[1].text}
            </Button>
          </Stack>
        </Container>

        <Box sx={{ position: 'absolute', bottom: 100, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography 
            sx={{ 
              color: 'white', 
              mb: '12px', 
              letterSpacing: '0px',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19.2px'
            }}
          >
            {policeDeptHeroData.scrollText}
          </Typography>
          <Box 
            sx={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '99px', 
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ArrowDownwardIcon sx={{ color: 'white', fontSize: '16px' }} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
