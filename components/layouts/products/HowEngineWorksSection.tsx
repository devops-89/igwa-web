"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

const steps = [
  {
    title: 'Classification, not generation',
    description:
      'Incoming descriptions are matched against a structured legal database to identify likely applicable sections; nothing is produced from the model\'s own "knowledge" of the law.',
  },
  {
    title: 'Retrieval with citations',
    description:
      'Every section shown links back to its exact source and version, so it can always be traced and verified.',
  },
  {
    title: 'Drafting, within limits',
    description:
      'The AI composes clear, structured language for FIRs, diary entries, and chargesheets, using only confirmed facts and citations, never invented ones',
  },
  {
    title: 'Full audit logging',
    description:
      'Every input, retrieval, and generated draft is recorded, along with every human edit made on top of it.',
  },
];

export default function HowEngineWorksSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        py: { xs: 8, md: 12, lg: 14 },
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Column: Title & Timeline with Exact Baseline Left Padding */}
        <Box
          sx={{
            pl: { xs: 3, sm: 6, md: '95px', lg: '119px' },
            pr: { xs: 3, lg: 4 },
            py: { xs: 4, lg: 0 },
            width: { xs: '100%', lg: '52%' },
            boxSizing: 'border-box',
          }}
        >
          {/* Title with Underline */}
          <Box sx={{ display: 'inline-block', mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                borderBottom: '2px solid rgba(255, 255, 255, 0.85)',
                pb: 1,
                display: 'inline-block',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.4rem', lg: '3.8rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.035em',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  whiteSpace: { sm: 'nowrap' },
                }}
              >
                How the engine works
              </Typography>
            </Box>
          </Box>

          {/* Timeline Steps */}
          <Box sx={{ position: 'relative', pl: 3.5 }}>
            {/* Vertical Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                top: '10px',
                bottom: '24px',
                left: '5px',
                width: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
            />

            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  mb: index === steps.length - 1 ? 0 : 5,
                }}
              >
                {/* Timeline Node Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '-28px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                  }}
                />

                {/* Step Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    mb: 1,
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {step.title}
                </Typography>

                {/* Step Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.72)',
                    fontSize: { xs: '0.92rem', md: '1.02rem' },
                    lineHeight: 1.6,
                    fontWeight: 400,
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    maxWidth: '520px',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Column: Phone Image extending to the rightmost edge */}
        <Box
          sx={{
            width: { xs: '100%', lg: '48%' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            pr: 0,
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/images/product2.png"
            alt="How the IGWA engine works on smartphone"
            sx={{
              maxWidth: { xs: '100%', lg: '115%' },
              height: 'auto',
              maxHeight: { xs: '550px', md: '750px', lg: '850px' },
              objectFit: 'contain',
              display: 'block',
              marginRight: { xs: 'auto', lg: 0 },
              marginLeft: { xs: 'auto', lg: 0 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
