"use client";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function HeroSection() {
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
            sx={{ 
              fontWeight: 700, 
              color: 'white', 
              mb: { xs: 2, md: '5px' },
              letterSpacing: '-2.4px',
              fontSize: { xs: '3rem', md: '88px' },
              lineHeight: { xs: 1.1, md: '100%' }
            }}
          >
            IGWA for Police Departments
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              color: 'white', 
              mb: { xs: 5, md: '59px' },
              letterSpacing: '-1.44px',
              fontSize: { xs: '1.5rem', md: '35px' },
              lineHeight: { xs: 1.4, md: '28.8px' }
            }}
          >
            Less time drafting. More time investigating.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              mb: '60px', 
              maxWidth: '884px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '24px' },
              lineHeight: '28.8px'
            }}
          >
            From FIR registration to chargesheet filing, IGWA handles the paperwork layer of a case so your officers spend their hours on the investigation, not the form.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ justifyContent: 'center', mb: 10 }}>
            <Button 
              variant="outlined" 
              sx={{ 
                width: '148px',
                height: '40px',
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.5)', 
                borderRadius: '16px',
                p: '8px 16px',
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
              Request a Pilot
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                width: '165px',
                height: '40px',
                color: 'white', 
                borderColor: 'rgba(255,255,255,0.5)', 
                borderRadius: '16px',
                p: '8px 16px',
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
              See the Workflow
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
            Scroll to Explore
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
