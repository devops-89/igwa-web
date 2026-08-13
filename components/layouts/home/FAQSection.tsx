"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { hindiFaqData } from "@/constants/hindiGenericData";

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>("panel-0");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }}>
          <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem" },
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                maxWidth: 400,
              }}
            >
              {hindiFaqData.title}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left" data-aos-delay="100">
            <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {hindiFaqData.faqs.map((faq, index) => {
                const panelId = `panel-${index}`;
                const isExpanded = expanded === panelId;

                return (
                  <Accordion
                    key={panelId}
                    expanded={isExpanded}
                    onChange={handleChange(panelId)}
                    disableGutters
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                      color: "inherit",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      "&::before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        isExpanded ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )
                      }
                      sx={{
                        px: 0,
                        py: { xs: 2.5, md: 3 },
                        "& .MuiAccordionSummary-content": { my: 0 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", md: "1.125rem" },
                          fontWeight: 400,
                          color: isExpanded ? "white" : "rgba(255,255,255,0.7)",
                          letterSpacing: "-0.01em",
                          pr: 2,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: { xs: 3, md: 4 }, pt: 0 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.875rem", md: "1rem" },
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.6)",
                          maxWidth: 700,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
