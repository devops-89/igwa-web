"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="absolute" color="transparent" elevation={0} sx={{ top: 20 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 0 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', cursor: 'pointer' }}>
              <Box sx={{ width: 4, height: 40, backgroundColor: 'white' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.1, fontSize: '1.1rem' }}>
                  Intelligent Governance
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', lineHeight: 1.1, fontSize: '1.1rem' }}>
                  Workflow Automation
                </Typography>
              </Box>
            </Box>
          </Link>
          
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', pl: 3, pr: 1, py: 1 }}>
            <Box sx={{ display: 'flex', gap: 4, mr: 4 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {pathname === '/' && <Box sx={{ width: 4, height: 4, backgroundColor: '#1E293B', borderRadius: '50%' }} />}
                <Typography variant="body2" sx={{ fontWeight: 700, color: pathname === '/' ? '#1E293B' : '#52525B', fontSize: '0.85rem' }}>
                  Home
                </Typography>
              </Link>
              <Link href="#" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#52525B', fontSize: '0.85rem' }}>
                  About us
                </Typography>
              </Link>
              <Link href="/products" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {pathname === '/products' && <Box sx={{ width: 4, height: 4, backgroundColor: '#1E293B', borderRadius: '50%' }} />}
                <Typography variant="body2" sx={{ fontWeight: 700, color: pathname === '/products' ? '#1E293B' : '#52525B', fontSize: '0.85rem' }}>
                  Our Product
                </Typography>
              </Link>
            </Box>
            <Button 
              variant="contained" 
              disableElevation
              sx={{ 
                borderRadius: '50px', 
                textTransform: 'none', 
                backgroundColor: '#007BFF',
                '&:hover': { backgroundColor: '#0056b3' },
                fontWeight: 700,
                fontSize: '0.85rem',
                px: 3,
                py: 1
              }}
            >
              Let's talk!
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

