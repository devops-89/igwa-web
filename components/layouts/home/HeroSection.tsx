"use client";

import React from "react";
import { Box, Typography, Button, Container, Stack, Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import heroBg from "@/images/home/hero_bg.png";
import AppButton from "./components/AppButton";
import Image from "next/image";
import apple from "@/images/icons/apple.svg";
import google from "@/images/icons/playstore.svg";

export default function HeroSection() {
  const appStoreButtons = [
    {
      img: apple,
      title: "Download on the",
      heading: "App Store",
    },
    {
      img: google,
      title: "Get it on",
      heading: "Google Play",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.50) 35.1%, rgba(0, 0, 0, 0.16) 53.37%, rgba(0, 0, 0, 1) 100%)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid container>
              <Grid size={12} sx={{ margin: "auto" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 85,
                    fontWeight: 700,
                    lineHeight: "82.8px",
                    letterSpacing: "-2.4px",
                  }}
                >
                  Paperwork, Drafted Faster. Investigation, Uninterrupted.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    lineHeight: "28.8px",
                    letterSpacing: "-1.44px",
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  IGWA is an AI-assisted platform that helps police officers
                  turn a citizen's statement into a legally sound FIR, daily
                  case diary, and chargesheet — grounded in the Bharatiya Nyaya
                  Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS),
                  2023 — in minutes, not hours.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 500,
                    lineHeight: "28.8px",
                    letterSpacing: "-1.44px",
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  Every AI-drafted document is reviewed and approved by the
                  officer before it carries any legal weight.
                </Typography>

                <Stack
                  direction={"row"}
                  sx={{ alignItems: "center", justifyContent: "center", mt: 4 }}
                  spacing={2}
                >
                  {appStoreButtons.map((val, i) => (
                    <AppButton>
                      <Stack
                        direction={"row"}
                        sx={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        spacing={1}
                      >
                        <Image src={val.img} alt="" />
                        <Stack>
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontWeight: 500,
                              lineHeight: "14.4px",
                              letterSpacing: "-0.6px",
                            }}
                          >
                            {val.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: 500,
                              lineHeight: "19.2px",
                              letterSpacing: "-0.8px",
                            }}
                          >
                            {val.heading}
                          </Typography>
                        </Stack>
                      </Stack>
                    </AppButton>
                  ))}
                </Stack>
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
