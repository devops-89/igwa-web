"use client";

import { productsHowEngineWorksData as en_productsHowEngineWorksData } from "@/constants/genericData";
import { hindiProductsHowEngineWorksData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HowEngineWorksSection() {
  const { language } = useLanguage();
  const productsHowEngineWorksData = language === 'hi' ? hindiProductsHowEngineWorksData : en_productsHowEngineWorksData;
  const steps = productsHowEngineWorksData.steps;

  return (
    <Box sx={{ backgroundColor: '#000000', py: { xs: 8, md: 15 }, width: '100%', position: 'relative', minHeight: { xs: 'auto', md: '1000px' }, display: 'flex', alignItems: 'center', overflow: 'hidden',mt:20 }}>
      {/* Desktop Absolute Track & Sticky Image */}
      <Box sx={{ 
        position: 'absolute', 
        top: '120px', 
        bottom: 0, 
        right: 0, 
        width: { xs: '0', lg: '547px' }, 
        display: { xs: 'none', lg: 'block' }, 
        zIndex: 1 
      }}>
        <Box 
          sx={{
            position: 'sticky',
            top: '120px',
            width: '100%',
          }}
          data-aos="fade-left"
        >
          <Image 
            src="/images/product2.png"
            alt="IGWA Engine"
            width={547}
            height={547}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Right Column - Image Spacer on Desktop */}
          <Box sx={{ width: { xs: '100%', lg: '41.666%' }, px: { xs: 2, lg: 0 }, order: { xs: 1, lg: 2 } }}>
            <Box 
              sx={{
                width: '100%',
                maxWidth: '547px',
                display: { xs: 'block', lg: 'none' }, // Hide on desktop since absolute image is used
                margin: '0 auto',
                mb: { xs: 6, lg: 0 }
              }}
              data-aos="fade-left"
            >
              <Image 
                src="/images/product2.png"
                alt="IGWA Engine"
                width={547}
                height={547}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
          
          {/* Left Column - Timeline */}
          <Box sx={{ width: { xs: '100%', lg: '58.333%' }, px: { xs: 2, lg: 4 }, order: { xs: 2, lg: 1 } }}>
            <Box sx={{ mb: { xs: 6, md: 10 }, ml: { xs: 2, md: '44px' } }}>
              <Typography 
                variant="h2" 
                sx={{
        fontWeight: 900,
        fontSize: { xs: 28, md: 44, lg: 52 },
        lineHeight: 1.3,
        paddingTop: "0.1em",
        paddingBottom: "0.1em",
        background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", 
                  
                  
                  
                  
                  
                  
                  
                  
                }}
                data-aos="fade-right"
              >
                {productsHowEngineWorksData.title}
              </Typography>
              <Box sx={{ width: '100%', maxWidth: '660px', height: '1px', backgroundColor: '#FFFFFF' }} />
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', pl: { xs: 2, md: '44px' } }}>
              {/* Continuous vertical line */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: '26px',
                  bottom: 0, 
                  left: { xs: '21px', md: '49px' },
                  width: '2px',
                  backgroundColor: '#FFFFFF',
                  zIndex: 0
                }} 
              />
              
              {steps.map((step: { title: string, description: string }, index: number) => (
                <Box key={index} sx={{ display: 'flex', mb: index !== steps.length - 1 ? { xs: 4, md: 8 } : 0, position: 'relative', zIndex: 1 }}>
                  {/* Dot */}
                  <Box sx={{ mr: { xs: 2, md: 4 }, mt: '20px' }}>
                    <Box 
                      sx={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        backgroundColor: '#FFFFFF' 
                      }} 
                    />
                  </Box>
                  
                  {/* Content */}
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#FFFFFF', 
                        fontWeight: 800, 
                        mb: 1,
                        fontSize: '18px',
                        lineHeight: 1.4,
                        letterSpacing: '0px'
                      }}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.72)', 
                        fontWeight: 400,
                        lineHeight: 1.5,
                        fontSize: '16px',
                        letterSpacing: '0px',
                        maxWidth: '520px'
                      }}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100 + 50}`}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Column - Image Spacer on Desktop */}
          <Box sx={{ width: { xs: '100%', lg: '41.666%' }, px: { xs: 2, lg: 0 }, order: { xs: 1, lg: 2 } }}>
            <Box 
              component="img"
              src="/images/product2.png"
              alt="IGWA Engine"
              sx={{
                width: '100%',
                maxWidth: '547px',
                height: 'auto',
                display: { xs: 'block', lg: 'none' }, // Hide on desktop since absolute image is used
                margin: '0 auto',
                mb: { xs: 6, lg: 0 }
              }}
              data-aos="fade-left"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
