"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { SlidingLogoMarquee } from "@/components/lightswind/sliding-logo-marquee";

const LOGOS = [
  { id: "logo-1", src: "/images/home/logos/logo-1.png", alt: "Partner logo 1" },
  { id: "logo-2", src: "/images/home/logos/logo-2.png", alt: "Partner logo 2" },
  { id: "logo-3", src: "/images/home/logos/logo-3.png", alt: "Partner logo 3" },
  { id: "logo-4", src: "/images/home/logos/logo-1.png", alt: "Partner logo 4" },
  { id: "logo-5", src: "/images/home/logos/logo-2.png", alt: "Partner logo 5" },
  { id: "logo-6", src: "/images/home/logos/logo-3.png", alt: "Partner logo 6" },
  { id: "logo-7", src: "/images/home/logos/logo-1.png", alt: "Partner logo 7" },
  { id: "logo-8", src: "/images/home/logos/logo-2.png", alt: "Partner logo 8" },
  { id: "logo-9", src: "/images/home/logos/logo-3.png", alt: "Partner logo 9" },
];

const SlidingLogo = () => {
  const items = LOGOS.map((logo) => ({
    id: logo.id,
    content: (
      <Box
        sx={{
          position: "relative",
          height: 23,
          width: 120,
          opacity: 0.5,
          filter: "grayscale(1) brightness(1.2)",
        }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    ),
  }));

  return (
    <Box
      sx={{
        bgcolor: "#000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        py: 3,
      }}
    >
      <SlidingLogoMarquee
        items={items}
        speed={10}
        pauseOnHover
        enableBlur
        height="55px"
        gap="2rem"
        showControls={false}
        backgroundColor="transparent"
      />
    </Box>
  );
};

export default SlidingLogo;
