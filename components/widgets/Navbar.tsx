"use client";

import { COLORS } from "@/lib/enum";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
      sx={{ top: { xs: 12, md: 20 }, bgcolor: "transparent" }}
    >
      <Container maxWidth={"lg"}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 74,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "center",
              maxWidth: 280,
            }}
          >
            <Box
              sx={{
                width: 3,
                height: 48,
                backgroundColor: COLORS.WHITE,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontWeight: 900,
                color: COLORS.WHITE,
                lineHeight: 1.16,
                fontSize: { xs: "1rem", md: "1.5625rem" },
                letterSpacing: "-0.046em",
              }}
            >
              Intelligent Governance Workflow Automation
            </Typography>
          </Box>
          <Divider sx={{ color: COLORS.WHITE }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              bgcolor: COLORS.LIGHT_BG,
              borderRadius: "9999px",
              pl: 4,
              pr: 1,
              py: 1,
              boxShadow:
                "0px 8px 16px rgba(0,0,0,0.2), 0px 4px 8px rgba(0,0,0,0.2)",
              minHeight: 74,
            }}
          >
            <Box sx={{ display: "flex", gap: 4, mr: 4, alignItems: "center" }}>
              <Link href="#" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ fontWeight: 600, color: COLORS.DARK_TEXT, fontSize: "0.875rem" }}
                >
                  Home
                </Typography>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ fontWeight: 600, color: COLORS.DARK_TEXT, fontSize: "0.875rem" }}
                >
                  About us
                </Typography>
              </Link>
              <Link
                href="#"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 4,
                    height: 4,
                    bgcolor: COLORS.DARK_TEXT,
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                <Typography
                  sx={{ fontWeight: 600, color: COLORS.DARK_TEXT, fontSize: "0.875rem" }}
                >
                  Our Product
                </Typography>
              </Link>
            </Box>
            <Button
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                bgcolor: COLORS.PRIMARY,
                "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                fontWeight: 700,
                fontSize: "0.875rem",
                px: 3,
                py: 1.25,
                minWidth: 100,
              }}
            >
              Let&apos;s talk!
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

