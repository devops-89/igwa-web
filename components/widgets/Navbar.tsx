"use client";

import React from 'react';
import { AppBar, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="absolute" color="transparent" elevation={0} sx={{ top: { xs: 20, md: 52 }, width: '100%', alignItems: 'center', px: { xs: 2, md: 0 } }}>
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '1150px',
          height: { xs: 'auto', md: 74 },
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: { xs: 2, md: 4 }
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexShrink: 0 }}>
          <Box sx={{ width: 2, height: { xs: 24, md: 32 }, backgroundColor: 'white' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.1, fontSize: { xs: '0.8rem', md: '1rem' }, letterSpacing: '0.5px' }}>
              Intelligent Governance
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.1, fontSize: { xs: '0.8rem', md: '1rem' }, letterSpacing: '0.5px' }}>
              Workflow Automation
            </Typography>
          </Box>
        </Box>
        
        {/* Straight connecting line */}
        <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.5)', display: { xs: 'none', md: 'block' } }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', pl: { xs: 1, md: 3 }, pr: 1, py: 1, flexShrink: 0 }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, mr: 4 }}>
            <Link href="#" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B', fontSize: '0.85rem' }}>Home</Typography>
            </Link>
            <Link href="#" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#475569', fontSize: '0.85rem' }}>About us</Typography>
            </Link>
            <Link href="#" passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#475569' }} />
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#475569', fontSize: '0.85rem' }}>Our Product</Typography>
            </Link>
          </Box>
          <Button 
            variant="contained" 
            sx={{ 
              borderRadius: '50px', 
              backgroundColor: '#1E40AF', // blue-800
              textTransform: 'none',
              fontWeight: 600,
              px: { xs: 2, md: 3 },
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: '#1e3a8a'
              }
            }}
          >
            Let's talk!
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
