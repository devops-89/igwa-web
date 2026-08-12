"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

export default function CTASection() {
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Give your officers back the hours paperwork was taking.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                lineHeight: 1.125,
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                maxWidth: 665,
              }}
            >
              Whether it&apos;s an FIR that needs registering, a diary entry due today,
              or a chargesheet deadline closing in IGWA meets your station where the
              caseload actually is.
            </Typography>

            <Button
              sx={{
                backgroundColor: "rgba(255,255,255,0.24)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                borderRadius: "100px",
                color: "white",
                px: 3,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 500,
                boxShadow: "inset 0px 0px 8px rgba(255,255,255,0.25)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.32)" },
              }}
            >
              Bring IGWA to Your Station
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 420,
                  aspectRatio: "416 / 456",
                  transform: "rotate(10.56deg)",
                }}
              >
                <Image
                  src="/images/home/cta-phone.png"
                  alt="IGWA app on iPhone"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
