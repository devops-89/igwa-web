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

const FAQ_ITEMS = [
  {
    question: "How much time does this actually save on daily case diaries?",
    answer:
      "Suggested sections are always sourced from a verified legal database and clearly labelled as preliminary subject to confirmation by a police officer, never presented as a final legal determination.",
    defaultExpanded: true,
  },
  {
    question: "Does IGWA replace an officer's investigation work?",
    answer:
      "No. IGWA is a drafting-assistance tool. Every document requires explicit review and approval by the investigating officer before it carries any legal weight.",
  },
  {
    question: "Can senior officers still countersign and review everything?",
    answer:
      "Yes. All workflows preserve the existing review and countersignature chain. IGWA drafts documents; officers and seniors retain full authority over approval.",
  },
  {
    question: "Can I trust the legal sections IGWA suggests?",
    answer:
      "Suggested sections are sourced from a verified legal database and clearly labelled as preliminary — subject to confirmation by a police officer, never presented as a final legal determination.",
  },
  {
    question: "Does IGWA work with our existing station records systems?",
    answer:
      "IGWA is designed to integrate with existing station workflows. Contact us to discuss compatibility with your current records infrastructure.",
  },
  {
    question: "Is my department's case data secure?",
    answer:
      "Case data is encrypted in transit and at rest, with role-based access controls aligned to station hierarchy and statutory requirements.",
  },
  {
    question: "Who can see my personal information?",
    answer:
      "Access is restricted to authorised personnel within your department's defined roles. Personal information is handled in accordance with applicable data protection requirements.",
  },
  {
    question: "Can this run in low-connectivity areas?",
    answer:
      "IGWA supports offline-capable workflows for field use, syncing when connectivity is restored so officers aren't blocked in low-bandwidth areas.",
  },
];

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
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
              }}
            >
              Frequently asked questions
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            {FAQ_ITEMS.map((item, index) => {
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
                      {item.question}
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
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
