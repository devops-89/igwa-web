"use client";

import { hindiNavData } from "@/constants/hindiGenericData";
import { navData as en_navData } from "@/constants/genericData";
import { useLanguage } from "@/context/LanguageContext";

import { COLORS } from "@/lib/enum";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Menu,
  MenuItem
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const navData = language === 'hi' ? hindiNavData : en_navData;

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangMenuAnchor(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangMenuAnchor(null);
  };

  const changeLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    handleLangMenuClose();
  };

  const navLinks = navData.slice(0, 4).map(link => ({
    label: link.name,
    href: link.path
  }));

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
          <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.5)', display: { xs: 'none', md: 'block' }, mx: { xs: 2, md: 4 } }} />
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
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={index} href={item.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                    {isActive && (
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
                    )}
                    <Typography
                      sx={{ fontWeight: isActive ? 700 : 600, color: COLORS.DARK_TEXT, fontSize: "0.875rem" }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
            <Link href={navData[4]?.path || "/contact-us"} passHref>
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
                {navData[4]?.name || "बात करें"}
              </Button>
            </Link>

            {/* Language Dropdown */}
            <Box sx={{ ml: 2 }}>
              <Button
                onClick={handleLangMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={<LanguageIcon />}
                sx={{
                  color: COLORS.DARK_TEXT,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                {language === 'en' ? 'English' : 'हिंदी'}
              </Button>
              <Menu
                anchorEl={langMenuAnchor}
                open={Boolean(langMenuAnchor)}
                onClose={handleLangMenuClose}
                disableScrollLock={true}
                sx={{
                  '& .MuiPaper-root': {
                    mt: 1,
                    minWidth: 120,
                    borderRadius: 2,
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                  }
                }}
              >
                <MenuItem 
                  onClick={() => changeLanguage('en')}
                  selected={language === 'en'}
                  sx={{ fontWeight: language === 'en' ? 700 : 500 }}
                >
                  English
                </MenuItem>
                <MenuItem 
                  onClick={() => changeLanguage('hi')}
                  selected={language === 'hi'}
                  sx={{ fontWeight: language === 'hi' ? 700 : 500 }}
                >
                  हिंदी
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: COLORS.WHITE }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: 280, 
            bgcolor: "rgba(0, 0, 0, 0.7)", 
            backdropFilter: "blur(12px)",
            color: "white" 
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 2 }}>
              <Link href={item.href} style={{ textDecoration: "none", width: "100%" }} onClick={handleDrawerToggle}>
                <Typography sx={{ fontWeight: 600, color: "white", fontSize: "1.125rem" }}>
                  {item.label}
                </Typography>
              </Link>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 4 }}>
            <Link href={navData[4]?.path || "/contact-us"} passHref style={{ width: "100%" }}>
              <Button
                variant="contained"
                fullWidth
                disableElevation
                sx={{
                  borderRadius: "9999px",
                  textTransform: "none",
                  bgcolor: COLORS.PRIMARY,
                  "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                  fontWeight: 700,
                  fontSize: "1rem",
                  py: 1.5,
                  mb: 2
                }}
                onClick={handleDrawerToggle}
              >
                {navData[4]?.name || "बात करें"}
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                onClick={() => { setLanguage('en'); handleDrawerToggle(); }}
                variant={language === 'en' ? "contained" : "outlined"}
                sx={{ 
                  flex: 1,
                  borderRadius: '9999px',
                  bgcolor: language === 'en' ? 'white' : 'transparent',
                  color: language === 'en' ? 'black' : 'white',
                  borderColor: 'white',
                  '&:hover': { bgcolor: language === 'en' ? 'white' : 'rgba(255,255,255,0.1)' }
                }}
              >
                English
              </Button>
              <Button 
                onClick={() => { setLanguage('hi'); handleDrawerToggle(); }}
                variant={language === 'hi' ? "contained" : "outlined"}
                sx={{ 
                  flex: 1,
                  borderRadius: '9999px',
                  bgcolor: language === 'hi' ? 'white' : 'transparent',
                  color: language === 'hi' ? 'black' : 'white',
                  borderColor: 'white',
                  '&:hover': { bgcolor: language === 'hi' ? 'white' : 'rgba(255,255,255,0.1)' }
                }}
              >
                हिंदी
              </Button>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}


