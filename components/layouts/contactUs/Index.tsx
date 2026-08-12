import React from 'react';
import { Box, Container } from '@mui/material';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactUsIndex() {
  return (
    <Box sx={{ backgroundColor: '#000000', width: '100%', pt: { xs: 18, md: '206px' }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ maxWidth: '1440px', px: { xs: 2, sm: 4, md: '123px' }, mx: 'auto' }}>
        <Box sx={{ width: '100%' }}>
          <ContactHeader />
          <ContactForm />
          <ContactInfo />
        </Box>
      </Container>
    </Box>
  );
}
