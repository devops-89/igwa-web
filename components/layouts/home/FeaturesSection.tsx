"use client";

import React from 'react';
import { Box, Typography, Container, Grid, Stack } from '@mui/material';

export default function FeaturesSection() {
  const logos = ['Forbes', 'TechCrunch', 'Y Combinator', 'Forbes', 'TechCrunch', 'Y Combinator', 'Forbes'];

  return (
    <Box sx={{ backgroundColor: '#000', color: 'white', py: 10, minHeight: '100vh' }}>
      {/* Logos Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'nowrap', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        py: 4,
        mb: 10
      }}>
        {logos.map((logo, index) => (
          <Typography 
            key={index} 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              color: 'rgba(255,255,255,0.3)', 
              mx: 4, 
              display: 'flex', 
              alignItems: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            {logo === 'Y Combinator' ? (
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, backgroundColor: 'rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2px' }}>
                  <Typography variant="caption" sx={{ color: '#000', fontWeight: 'bold' }}>Y</Typography>
                </Box>
                Combinator
              </Box>
            ) : logo}
          </Typography>
        ))}
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pr: { md: 5 } }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                Paperwork shouldn't be the hardest part of the job.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                FIRs, daily case diaries, chargesheets, each one hand-typed, each one repetitive, each one a chance to lose an hour that should've gone to the actual investigation. Add statutory deadlines under BNSS on top of an already heavy caseload, and it's easy to see why paperwork backs up faster than cases close.
              </Typography>
              
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 8, fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)' }}>
                IGWA doesn't touch an officer's judgment or the legal process. It just takes the drafting weight off it.
              </Typography>

              <Typography variant="h2" sx={{ fontWeight: 700, mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                Diary Entries, Dictated Not Typed
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Update a case diary the way you actually work, on your feet, not at a desk.
              </Typography>

              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Speak your update, in Hindi or English, right from the field. IGWA turns it into a structured, dated diary entry — no re-typing after a long shift, no formatting to get right, no risk of it slipping to tomorrow.
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 65%)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />
              <Box 
                component="img"
                src="/phone-mockup.png"
                alt="IGWA Phone App"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxHeight: '800px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
