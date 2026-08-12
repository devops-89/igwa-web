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
    <Box sx={{ bgcolor: "#000", color: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
              }}
            >
              {hindiFaqData.title}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} data-aos="fade-left" data-aos-delay="100">
            <Box sx={{ maxWidth: 840, mx: "auto" }}>
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
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                      "&::before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        isExpanded ? (
                          <RemoveIcon sx={{ color: "white", fontSize: 20 }} />
                        ) : (
                          <AddIcon sx={{ color: "#aeaeae", fontSize: 20 }} />
                        )
                      }
                      sx={{
                        px: 0,
                        py: 2,
                        "& .MuiAccordionSummary-content": { my: 0 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.125rem", md: "1.5rem" },
                          color: isExpanded ? "white" : "#aeaeae",
                          letterSpacing: "-0.02em",
                          pr: 2,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3, pt: 0 }}>
                      <Typography
                        sx={{
                          fontSize: "1.125rem",
                          lineHeight: 1.55,
                          color: "rgba(255,255,255,0.85)",
                          maxWidth: 708,
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
