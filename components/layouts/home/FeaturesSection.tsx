"use client";

import { problemData as en_problemData, whatIgwaDoesData as en_whatIgwaDoesData } from "@/constants/genericData";
import {
  hindiProblemData,
  hindiWhatIgwaDoesData,
} from "@/constants/hindiGenericData";
import { useLanguage } from "@/context/LanguageContext";
import phoneHand from "@/images/home/phone_in_hand.png";
import { COLORS } from "@/lib/enum";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Activity, Mic, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  const { language } = useLanguage();
  const problemData = language === 'hi' ? hindiProblemData : en_problemData;
  const whatIgwaDoesData = language === 'hi' ? hindiWhatIgwaDoesData : en_whatIgwaDoesData;

  return (
    <Box
      id="features"
      sx={{
        backgroundColor: "#000",
        color: "white",
        py: { xs: 12, md: 10 },
        position: "relative",
        overflow: "hidden",
        "@keyframes pulseGlow": {
          "0%": { transform: "translate(-50%, 0) scale(1)", opacity: 0.5 },
          "100%": { transform: "translate(-50%, 0) scale(1.1)", opacity: 1 },
        },
        "@keyframes pulseGlowRight": {
          "0%": { transform: "scale(1)", opacity: 0.5 },
          "100%": { transform: "scale(1.1)", opacity: 1 },
        },
      }}
    >
      {/* High-Tech Glowing Orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "60vw",
          height: "40vw",
          background:
            "radial-gradient(ellipse, rgba(255,105,31,0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
          animation: "pulseGlow 6s infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(1,113,227,0.2) 0%, transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* --- TOP SECTION: THE PROBLEM (Centered) --- */}
        <Box
          sx={{ textAlign: "center", mb: { xs: 12, md: 16 } }}
          data-aos="fade-up"
        >
          <Typography
            sx={{
              display: "inline-block",
              color: "#ff691f",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 3,
              border: "1px solid rgba(255,105,31,0.3)",
              px: 2,
              py: 0.5,
              borderRadius: 20,
              backgroundColor: "rgba(255,105,31,0.1)",
              boxShadow: "0 0 15px rgba(255,105,31,0.2)",
            }}
          >
            वर्तमान समस्या
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 28, md: 44, lg: 52 },
              mt: 8,
              mb: 8,
              lineHeight: 1.3,
              paddingTop: "0.1em",
              paddingBottom: "0.1em",
              background: `linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {problemData.title}
          </Typography>

          {/* Glowing Stats Container */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 4, md: 8 },
              mb: 8,
              p: { xs: 4, md: 5 },
              borderRadius: 6,
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "inset 0 0 30px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {problemData.stats.map((stat, i) => (
              <React.Fragment key={i}>
                <Box
                  sx={{
                    textAlign: "center",
                    flex: { xs: "1 1 100%", sm: "1 1 0" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ff691f",
                      fontSize: { xs: 36, md: 48 },
                      fontWeight: 900,
                      lineHeight: 1,
                      mb: 1,
                      textShadow: "0 0 20px rgba(255,105,31,0.4)",
                    }}
                  >
                    {stat.split(" ")[0]}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: 1,
                    }}
                  >
                    {stat.split(" ").slice(1).join(" ")}
                  </Typography>
                </Box>
                {i < problemData.stats.length - 1 && (
                  <>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        display: { xs: "none", sm: "block" },
                        borderColor: "rgba(255,255,255,0.1)",
                      }}
                    />
                    <Divider
                      flexItem
                      sx={{
                        display: { xs: "block", sm: "none" },
                        width: "100%",
                        borderColor: "rgba(255,255,255,0.1)",
                      }}
                    />
                  </>
                )}
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: 16, md: 18 },
                fontWeight: 300,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              {problemData.description1}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: 16, md: 18 },
                fontWeight: 300,
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              {problemData.description2}
            </Typography>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                background: "rgba(1,113,227,0.1)",
                border: `1px solid rgba(1,113,227,0.4)`,
                boxShadow: `0 0 30px rgba(1,113,227,0.3)`,
              }}
            >
              <Activity size={20} color={COLORS.PRIMARY} />
              <Typography
                sx={{ color: "white", fontSize: 16, fontWeight: 500 }}
              >
                <Typography
                  component="span"
                  sx={{ fontWeight: 800, color: COLORS.PRIMARY }}
                >
                  IGWA{" "}
                </Typography>
                {problemData.conclusion.replace("IGWA ", "")}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Vertical Connector Line */}
        <Box
          sx={{
            width: 2,
            height: 120,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), rgba(1,113,227,0.8), rgba(255,255,255,0))",
            mx: "auto",
            mb: 8,
            boxShadow: "0 0 15px rgba(1,113,227,0.5)",
          }}
        />

        {/* --- BOTTOM SECTION: THE SOLUTION --- */}
        <Box data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: { xs: 26, md: 40 },
              fontWeight: 900,
              color: COLORS.WHITE,
              mb: 10,
              textShadow: `0 0 30px rgba(1,113,227,0.5)`,
            }}
          >
            {whatIgwaDoesData.section1.title}
          </Typography>

          <Grid container spacing={8} sx={{ alignItems: "center" }}>
            {/* Left side: Glassmorphism Feature Cards */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Stack spacing={4}>
                {/* Feature 1 */}
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(1,113,227,0.4)",
                      transform: "translateX(10px)",
                      boxShadow: "0 15px 40px rgba(1,113,227,0.15)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(1,113,227,0.1)",
                        border: `1px solid rgba(1,113,227,0.3)`,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Mic color={COLORS.PRIMARY} size={28} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          mb: 1,
                        }}
                      >
                        {whatIgwaDoesData.section1.point1}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {whatIgwaDoesData.section1.point2}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(105,240,174,0.4)",
                      transform: "translateX(10px)",
                      boxShadow: "0 15px 40px rgba(105,240,174,0.15)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(105,240,174,0.1)",
                        border: `1px solid rgba(105,240,174,0.3)`,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ShieldCheck color="#69f0ae" size={28} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          mb: 1,
                        }}
                      >
                        {whatIgwaDoesData.section1.point3Title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {whatIgwaDoesData.section1.point3}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,183,77,0.4)",
                      transform: "translateX(10px)",
                      boxShadow: "0 15px 40px rgba(255,183,77,0.15)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "rgba(255,183,77,0.1)",
                        border: `1px solid rgba(255,183,77,0.3)`,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Zap color="#ffb74d" size={28} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          mb: 1,
                        }}
                      >
                        {whatIgwaDoesData.section1.point4Title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {whatIgwaDoesData.section1.point4}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Right side: Glowing Phone Presentation */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: 450, md: 650 },
                  borderRadius: 8,
                  backgroundColor: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "inset 0 0 40px rgba(1,113,227,0.05)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "80%",
                    height: "80%",
                    background:
                      "radial-gradient(circle, rgba(1,113,227,0.3) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                    animation: "pulseGlowRight 4s infinite alternate",
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "120%",
                    height: "120%",
                    "& img": {
                      filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.9))",
                    },
                  }}
                >
                  <Image
                    src={phoneHand}
                    alt="IGWA mobile app"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
