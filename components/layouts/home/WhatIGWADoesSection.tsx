"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function WhatIGWADoesSection() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "-0.05em",
              mb: 2,
            }}
          >
            What IGWA Does
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.125rem", md: "1.5rem" },
              letterSpacing: "-0.045em",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            One platform. Every hour it gives back is an hour your officers get to
            investigate.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                color: "#000",
                borderRadius: "40px",
                p: { xs: 4, md: 5 },
                minHeight: { xs: 480, md: 814 },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  letterSpacing: "-0.044em",
                  lineHeight: 1.08,
                  mb: 3,
                }}
              >
                Chargesheet,
                <br />
                Assembled Not Written
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 1,
                  bgcolor: "rgba(0,0,0,0.12)",
                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  color: "#767680",
                  fontSize: { xs: "1.125rem", md: "1.5rem" },
                  lineHeight: 1.125,
                  letterSpacing: "-0.045em",
                  mb: 4,
                }}
              >
                FIR, Diary, and Evidence pulled into one structured draft
                automatically, Flagged against statutory filing deadlines
                <br />
                <br />
                Ready for your counter signature, not a rewrite.
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  position: "relative",
                  height: 120,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 175,
                    height: 100,
                  }}
                >
                  <Image
                    src="/images/home/features/chargesheet-stars.png"
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  sx={{
                    position: "absolute",
                    right: -20,
                    bottom: 20,
                    fontWeight: 900,
                    fontSize: "6.25rem",
                    color: "#dedede",
                    letterSpacing: "-0.024em",
                    transform: "rotate(90deg)",
                    transformOrigin: "center",
                    lineHeight: 1,
                  }}
                >
                  IGWA
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, height: "100%" }}>
              <Box
                sx={{
                  bgcolor: "#0171E3",
                  borderRadius: "40px",
                  p: 1,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                  minHeight: 399,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "rgba(244,244,244,0.08)",
                    borderRadius: "32px",
                    p: 3,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      letterSpacing: "-0.044em",
                      mb: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Smart FIR Creation
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      right: -20,
                      bottom: -20,
                      width: 200,
                      height: 210,
                    }}
                  >
                    <Image
                      src="/images/home/features/smart-fir-wand.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 3, sm: 4 }, flex: 1, display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.125rem", md: "1.5rem" },
                      lineHeight: 1.125,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    A citizen&apos;s statement — typed or spoken, in Hindi or English
                    becomes a ready-to-confirm FIR draft, with the relevant legal
                    sections already identified and cited.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderRadius: "40px",
                  p: 1,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                  minHeight: 399,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    p: { xs: 3, sm: 4 },
                    position: "relative",
                    minHeight: 280,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1.75rem", md: "2.25rem" },
                      letterSpacing: "-0.044em",
                      mb: 2,
                    }}
                  >
                    Case Diary,
                    <br />
                    Auto Started
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: 220,
                      height: 200,
                    }}
                  >
                    <Image
                      src="/images/home/features/case-diary-book.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "#000",
                    borderRadius: "32px",
                    p: { xs: 3, sm: 4 },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.125rem", md: "1.5rem" },
                      lineHeight: 1.125,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    The first diary entry drafts itself from uploaded documents. Every
                    day after, add an update by voice. Once finalized, entries lock —
                    nothing gets rewritten, nothing gets lost.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
