"use client";

import { heroData as en_heroData } from "@/constants/genericData";
import { hindiHeroData } from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";

import heroBg from "@/images/home/hero_bg.png";
import apple from "@/images/icons/apple.svg";
import google from "@/images/icons/playstore.svg";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AppButton from "./components/AppButton";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = language === 'hi' ? hindiHeroData : en_heroData;

  const appStoreButtons = [
    {
      img: apple,
      title: "",
      heading: heroData.appStoreBtn,
    },
    {
      img: google,
      title: "",
      heading: heroData.googlePlayBtn,
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.50) 35.1%, rgba(0, 0, 0, 0.16) 53.37%, rgba(0, 0, 0, 1) 100%)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pt: { xs: 20, md: 28 },
            pb: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container>
              <Grid size={12} sx={{ margin: "auto" }}>
                <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center" }}>
                  
                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: 40, sm: 56, md: 72 },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: "-0.04em",
                      mb: 3,
                    }}
                    data-aos="fade-up"
                  >
                    {heroData.title}
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 22, md: 28 },
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                      color: "rgba(255, 255, 255, 0.95)",
                      mb: 4,
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {heroData.subtitle}
                  </Typography>

                  {/* Feature Descriptions */}
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: "-0.01em",
                      color: "rgba(255, 255, 255, 0.8)",
                      maxWidth: 850,
                      mx: "auto",
                      mb: 6,
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {heroData.description1}
                    <br />
                    <br />
                    {heroData.description2}
                  </Typography>

                  {/* App Store Buttons */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    sx={{ alignItems: "center", justifyContent: "center", mb: 8 }}
                    spacing={3}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {appStoreButtons.map((val, i) => (
                      <AppButton key={i}>
                        <Stack
                          direction={"row"}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          spacing={1.5}
                        >
                          <Image src={val.img} alt="" width={28} height={28} />
                          <Stack>
                            <Typography
                              sx={{
                                fontSize: 12,
                                fontWeight: 500,
                                lineHeight: "14px",
                                letterSpacing: "-0.02em",
                                textAlign: "left"
                              }}
                            >
                              {val.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 600,
                                lineHeight: "20px",
                                letterSpacing: "-0.02em",
                                textAlign: "left"
                              }}
                            >
                              {val.heading}
                            </Typography>
                          </Stack>
                        </Stack>
                      </AppButton>
                    ))}
                  </Stack>

                  {/* Disclaimer / Trust Badge */}
                  <Box
                    data-aos="fade-up"
                    data-aos-delay="400"
                    sx={{
                      display: "inline-block",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "24px",
                      px: { xs: 3, md: 5 },
                      py: { xs: 2.5, md: 3 },
                      maxWidth: 700,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 16, md: 18 },
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: "rgba(255, 255, 255, 0.95)",
                        mb: 1,
                      }}
                    >
                      {heroData.description3}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 15 },
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {heroData.description4}
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
    // <Box
    //   sx={{
    //     position: "relative",
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundImage:
    //       "linear-gradient(180deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.16) 53%, #000 100%), url(/hero-bg.png)",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     color: "white",
    //     pt: { xs: 14, md: 18 },
    //     pb: 8,
    //   }}
    // >
    //   <Container
    //     maxWidth="lg"
    //     sx={{
    //       textAlign: "center",
    //       zIndex: 1,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Typography
    //       variant="h1"
    //       sx={{
    //         fontWeight: 700,
    //         mb: 3,
    //         lineHeight: 0.94,
    //         letterSpacing: "-0.027em",
    //         fontSize: { xs: "2.75rem", sm: "3.5rem", md: "5.5rem" },
    //         maxWidth: 1067,
    //       }}
    //     >
    //       Paperwork, Drafted Faster.
    //       <br />
    //       Investigation, Uninterrupted.
    //     </Typography>

    //     <Typography
    //       sx={{
    //         fontWeight: 500,
    //         color: "white",
    //         fontSize: { xs: "1rem", md: "1.5rem" },
    //         lineHeight: 1.2,
    //         letterSpacing: "-0.06em",
    //         maxWidth: 1043,
    //         mb: 2,
    //       }}
    //     >
    //       IGWA is an AI-assisted platform that helps police officers turn a
    //       citizen&apos;s statement into a legally sound FIR, daily case diary,
    //       and chargesheet — grounded in the Bharatiya Nyaya Sanhita (BNS) and
    //       Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 — in minutes, not
    //       hours.
    //     </Typography>

    //     <Typography
    //       sx={{
    //         display: "block",
    //         mb: 5,
    //         color: "white",
    //         fontSize: { xs: "0.875rem", md: "1.0625rem" },
    //         fontWeight: 500,
    //         letterSpacing: "-0.085em",
    //       }}
    //     >
    //       Every AI-drafted document is reviewed and approved by the officer
    //       before it carries any legal weight.
    //     </Typography>

    //     <Stack
    //       direction={{ xs: "column", sm: "row" }}
    //       spacing={2}
    //       sx={{ mb: 10, justifyContent: "center" }}
    //     >
    //       <Button variant="contained" startIcon={<AppleIcon />} sx={storeButtonSx}>
    //         <Box sx={{ textAlign: "left", ml: 0.5 }}>
    //           <Typography
    //             sx={{
    //               display: "block",
    //               lineHeight: 1,
    //               fontSize: "0.75rem",
    //               fontWeight: 500,
    //               letterSpacing: "-0.05em",
    //             }}
    //           >
    //             Download on the
    //           </Typography>
    //           <Typography sx={{ fontWeight: 500, lineHeight: 1.2, fontSize: "1rem" }}>
    //             App Store
    //           </Typography>
    //         </Box>
    //       </Button>

    //       <Button variant="contained" startIcon={<PlayArrowIcon />} sx={storeButtonSx}>
    //         <Box sx={{ textAlign: "left", ml: 0.5 }}>
    //           <Typography
    //             sx={{
    //               display: "block",
    //               lineHeight: 1,
    //               fontSize: "0.75rem",
    //               fontWeight: 500,
    //               letterSpacing: "-0.05em",
    //             }}
    //           >
    //             Get in on
    //           </Typography>
    //           <Typography sx={{ fontWeight: 500, lineHeight: 1.2, fontSize: "1rem" }}>
    //             Google Play
    //           </Typography>
    //         </Box>
    //       </Button>
    //     </Stack>

    //     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    //       <Typography sx={{ mb: 1, fontSize: "1rem", fontWeight: 500 }}>
    //         Scroll to Explore
    //       </Typography>
    //       <Box
    //         sx={{
    //           width: 24,
    //           height: 24,
    //           borderRadius: "50%",
    //           bgcolor: "rgba(255,255,255,0.12)",
    //           backdropFilter: "blur(4px)",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           animation: "float 2s ease-in-out infinite",
    //           "@keyframes float": {
    //             "0%, 100%": { transform: "translateY(0)" },
    //             "50%": { transform: "translateY(6px)" },
    //           },
    //         }}
    //       >
    //         <KeyboardArrowDownIcon sx={{ fontSize: 20, opacity: 0.9 }} />
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>
  );
}
