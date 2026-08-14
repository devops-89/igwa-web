"use client";

import { policeDeptHeroData as en_policeDeptHeroData } from "@/constants/genericData";
import { hindiPoliceDeptHeroData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function HeroSection() {
  const { language } = useLanguage();
  const policeDeptHeroData = language === 'hi' ? hindiPoliceDeptHeroData : en_policeDeptHeroData;

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

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
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", 
              
              
              
              
              
              mb: { xs: 2, md: '5px' },
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
              fontSize: { xs: 18, sm: 22, md: 28 },
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "rgba(255, 255, 255, 0.95)",
              mb: { xs: 5, md: '59px' },
            }}
          >
            {policeDeptHeroData.subtitle}
          </Typography>
          <Typography 
            variant="body1" 
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
        fontSize: { xs: 16, md: 20 },
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "-0.01em",
        color: "rgba(255, 255, 255, 0.8)", 
              
              
              
              
              
              mb: '60px', 
              maxWidth: '884px',
              mx: 'auto',
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

        {/* Scroll Indicator */}
        <Box
          onClick={handleScrollDown}
          sx={{
            position: "absolute",
            bottom: { xs: 50, md: 80 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            opacity: 0.8,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
            }}
          >
            {policeDeptHeroData.scrollText}
          </Typography>

          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatDown 2s ease-in-out infinite",
              "@keyframes floatDown": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(5px)" },
              },
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 16, color: "#FFFFFF" }} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
