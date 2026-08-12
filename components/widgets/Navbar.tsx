"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Our Product", href: "/#product" },
  ];

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: { xs: 12, sm: 20 }, zIndex: 1100, overflowX: "hidden", width: "100%" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 }, overflowX: "hidden" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 1.5, sm: 0 },
            p: 0,
            width: "100%",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box sx={{ width: 4, height: { xs: 32, sm: 40 }, backgroundColor: "white" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                    fontSize: { xs: "0.85rem", sm: "1.1rem" },
                  }}
                >
                  Intelligent Governance
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                    fontSize: { xs: "0.85rem", sm: "1.1rem" },
                  }}
                >
                  Workflow Automation
                </Typography>
              </Box>
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "50px",
              pl: { xs: 1.5, sm: 3 },
              pr: 0.75,
              py: 0.5,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              maxWidth: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: { xs: 1.25, sm: 3.5 }, mr: { xs: 1, sm: 3 } }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    {isActive && (
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          backgroundColor: "#1E293B",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#1E293B" : "#52525B",
                        fontSize: { xs: "0.72rem", sm: "0.85rem" },
                        transition: "color 0.2s ease",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: "#1E293B",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            <Button
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                backgroundColor: "#007BFF",
                "&:hover": { backgroundColor: "#0056b3" },
                fontWeight: 700,
                fontSize: { xs: "0.72rem", sm: "0.85rem" },
                px: { xs: 1.5, sm: 3 },
                py: { xs: 0.6, sm: 1 },
                whiteSpace: "nowrap",
              }}
            >
              Let's talk!
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

