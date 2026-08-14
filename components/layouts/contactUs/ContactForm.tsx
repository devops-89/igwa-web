"use client";

import { contactUsFormData as en_contactUsFormData } from "@/constants/genericData";
import { hindiContactUsFormData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Button, Checkbox, Link, TextField, Typography } from '@mui/material';

export default function ContactForm() {
  const { language } = useLanguage();
  const contactUsFormData = language === 'hi' ? hindiContactUsFormData : en_contactUsFormData;

  const inputLabelProps = {
    sx: { color: '#FFFFFF', fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '1.25rem', lineHeight: '2.25rem', mb: 1 }
  };

  const inputStyles = {
    input: { color: '#FFFFFF', fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', paddingBottom: '12px', height: 'auto' },
    '& .MuiInput-underline:before': { borderBottomColor: '#FFFFFF', borderBottomWidth: '1px' },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#FFFFFF' },
    '& .MuiInput-underline:after': { borderBottomColor: '#FFFFFF' },
  };

  const glassButtonStyle = {
    background: '#FFFFFF3D',
    boxShadow: 'inset 0px 0px 8px 0px #FFFFFF40',
    backdropFilter: 'blur(5px)',
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: '"Inter", sans-serif',
  };

  return (
    <Box component="form" data-aos="fade-up" data-aos-delay="200" sx={{ width: '100%', maxWidth: '987px', mb: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography {...inputLabelProps}>
          {contactUsFormData.nameLabel}
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          sx={inputStyles}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 5, md: '121px' }, mb: 5 }}>
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '433px' } }}>
          <Typography {...inputLabelProps}>
            {contactUsFormData.emailLabel}
          </Typography>
          <TextField
            variant="standard"
            fullWidth
            sx={inputStyles}
          />
        </Box>
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '433px' } }}>
          <Typography {...inputLabelProps}>
            {contactUsFormData.phoneLabel}
          </Typography>
          <TextField
            variant="standard"
            fullWidth
            sx={inputStyles}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography
          sx={{
            color: '#FFFFFF',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: '2.25rem',
            mb: 0
          }}
        >
          {contactUsFormData.messageLabel}
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          multiline
          placeholder={contactUsFormData.messagePlaceholder}
          sx={{
            ...inputStyles,
            textarea: {
              color: '#FFFFFF',
              fontFamily: '"Inter", sans-serif',
              fontSize: '1.25rem',
              lineHeight: '2.25rem',
              paddingBottom: '60px',
            },
            '& input::placeholder, & textarea::placeholder': {
              color: '#FFFFFF99',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '1.25rem',
              lineHeight: '2.25rem',
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 3, pt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ ...glassButtonStyle, borderRadius: '5px', p: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 27, mr: 2 }}>
            <Checkbox
              sx={{
                color: 'transparent',
                '&.Mui-checked': { color: '#FFFFFF' },
              }}
            />
          </Box>
          <Typography sx={{ color: '#FFFFFF99', fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', lineHeight: '2.25rem', fontWeight: 400 }}>
            {contactUsFormData.checkboxTextPart1}
            <Link href="#" sx={{ color: '#FFFFFF99', textDecoration: 'underline', textDecorationThickness: '1px' }}>
              {contactUsFormData.checkboxLinkText}
            </Link>
            {contactUsFormData.checkboxTextPart2}
          </Typography>
        </Box>

        <Button
          variant="contained"
          disableElevation
          sx={{
            ...glassButtonStyle,
            borderRadius: '100px',
            px: '24px',
            py: '10px',
            pl: '20px',
            fontWeight: 400,
            fontSize: '1.125rem',
            width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto on larger
            '&:hover': {
              background: '#FFFFFF50'
            }
          }}
        >
          {contactUsFormData.submitButtonText}
        </Button>
      </Box>
    </Box>
  );
}
