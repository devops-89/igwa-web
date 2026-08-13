import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactInfo() {
  const iconContainerStyle = {
    backgroundColor: 'transparent',
    color: '#F5F5F5',
    width: 52,
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid #F5F5F5', // Assuming a border or they are just icons. Actually, the figma doesn't specify bg for icon, let's keep it simple.
    borderRadius: '50%'
  };

  const glassButtonStyle = {
    background: '#FFFFFF3D',
    boxShadow: 'inset 0px 0px 8px 0px #FFFFFF40',
    backdropFilter: 'blur(5px)',
    color: '#FFFFFF',
    textTransform: 'none',
  };

  return (
    <Box 
      sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        columnGap: 4, 
        rowGap: { xs: 3, md: 4 }, 
        pb: 10 
      }}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* 1. Office hours (Left Top) */}
      <Typography
        sx={{
          gridColumn: { xs: '1 / -1', md: '1 / 2' },
          gridRow: { md: '1 / 2' },
          color: '#F5F5F5',
          fontWeight: 600,
          fontFamily: 'inherit',
          fontSize: { xs: '1.375rem', md: '1.6875rem' },
          height: { xs: 'auto', md: '55px' },
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          pb: { xs: 0, md: 1 }
        }}
      >
        Office hours and support
      </Typography>

      {/* 2. Date/Time (Right Top on desktop, immediately under heading on mobile) */}
      <Typography
        sx={{
          gridColumn: { xs: '1 / -1', md: '2 / 3' },
          gridRow: { md: '1 / 2' },
          color: '#F5F5F5',
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontSize: { xs: '1.125rem', md: '1.3125rem' },
          fontWeight: 400,
          height: { xs: 'auto', md: '55px' },
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          pb: { xs: 0, md: 1 }
        }}
      >
        Monday - Saturday , 9:00 AM - 6:00 PM EST
      </Typography>

      {/* 3. Phone (Left Middle) */}
      <Box sx={{ 
        gridColumn: { xs: '1 / -1', md: '1 / 2' },
        gridRow: { md: '2 / 3' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <CallIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
          +91-8882158983
        </Typography>
      </Box>

      {/* 4. Mail (Left Bottom) */}
      <Box sx={{ 
        gridColumn: { xs: '1 / -1', md: '1 / 2' },
        gridRow: { md: '3 / 4' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <EmailIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
          igwa@gmail.com
        </Typography>
      </Box>

      {/* 5. Location (Right Middle) */}
      <Box sx={{ 
        gridColumn: { xs: '1 / -1', md: '2 / 3' },
        gridRow: { md: '2 / 3' },
        display: 'flex', alignItems: 'center', gap: 3 
      }}>
        <Box sx={iconContainerStyle}>
          <LocationOnIcon sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '1.25rem' }}>
            igwa office
          </Typography>
          <Typography sx={{ color: '#F5F5F5', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 400, fontSize: '1.125rem' }}>
            new delhi, india
          </Typography>
        </Box>
      </Box>

      {/* 6. Button (Right Bottom) */}
      <Box sx={{ 
        gridColumn: { xs: '1 / -1', md: '2 / 3' },
        gridRow: { md: '3 / 4' },
        alignSelf: 'start' 
      }}>
        <Button
          variant="contained"
          disableElevation
          fullWidth
          sx={{
            ...glassButtonStyle,
            borderRadius: '100px',
            py: '10px',
            fontSize: '1.125rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            '&:hover': {
              background: '#FFFFFF50'
            }
          }}
        >
          Get Direction
        </Button>
      </Box>
    </Box>
  );
}
