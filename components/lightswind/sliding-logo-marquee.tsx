"use client";

import React, { useState } from "react";
import { Pause, Play } from "lucide-react";
import { Box, IconButton, styled, keyframes } from "@mui/material";

export interface SlidingLogoMarqueeItem {
  id: string;
  content: React.ReactNode;
  href?: string;
}

export interface SlidingLogoMarqueeProps {
  items: SlidingLogoMarqueeItem[];
  speed?: number;
  pauseOnHover?: boolean;
  enableBlur?: boolean;
  blurIntensity?: number;
  height?: string;
  width?: string;
  gap?: string;
  scale?: number;
  direction?: "horizontal" | "vertical";
  autoPlay?: boolean;
  backgroundColor?: string;
  showGridBackground?: boolean;
  className?: string;
  onItemClick?: (item: SlidingLogoMarqueeItem) => void;
  enableSpillEffect?: boolean;
  animationSteps?: number;
  showControls?: boolean;
}

const marqueeHorizontal = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); } 
`;

const marqueeVertical = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
`;

const MarqueeContainer = styled(Box)<{ scaleval: number; bg: string }>(({ scaleval, bg }) => ({
  position: "relative",
  background: bg,
  scale: scaleval,
}));

const MarqueeResizable = styled(Box)<{ h: string; spill: boolean }>(({ h, spill }) => ({
  overflow: "hidden",
  width: "100%",
  height: h,
  position: "relative",
  ...(spill && { containerType: "size" }),
}));

const MarqueeInner = styled(Box)<{ scaleval: number; spill: boolean }>(({ scaleval, spill }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  mask: "linear-gradient(90deg, transparent, black 15% 85%, transparent)",
  WebkitMask: "linear-gradient(90deg, transparent, black 15% 85%, transparent)",
  display: "flex",
  pointerEvents: "none",
  ...(spill && {
    "&::after": {
      content: '""',
      position: "fixed",
      top: "50%",
      left: "50%",
      width: `calc(${scaleval} * 10000vw)`,
      height: `calc(${scaleval} * 10000vh)`,
      pointerEvents: "none",
      translate: "-50% -50%",
      mask: "linear-gradient(white, white) 50% 50% / 100% 100% no-repeat, linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat",
      WebkitMask: "linear-gradient(white, white) 50% 50% / 100% 100% no-repeat, linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat",
      maskComposite: "exclude",
      WebkitMaskComposite: "source-out",
    },
  }),
}));

const MarqueeList = styled("ul")<{
  direction: string;
  duration: string;
  gap: string;
  isPlaying: boolean;
}>(({ direction, duration, gap, isPlaying }) => ({
  display: "flex",
  flexShrink: 0,
  minWidth: direction === "vertical" ? "unset" : "200%",
  minHeight: direction === "vertical" ? "200%" : "unset",
  width: direction === "vertical" ? "100%" : "unset",
  flexDirection: direction === "vertical" ? "column" : "row",
  gap: gap,
  height: "100%",
  alignItems: "center",
  listStyleType: "none",
  paddingInline: 0,
  margin: 0,
  pointerEvents: "auto",
  animation: `${direction === "vertical" ? marqueeVertical : marqueeHorizontal} ${duration} linear infinite`,
  animationPlayState: isPlaying ? "running" : "paused",
  transform: "translateZ(0)",
  willChange: "transform",
}));

const MarqueeItem = styled("li")({
  minWidth: "clamp(100px, 15vw, 250px)",
  height: "80%",
  aspectRatio: "16 / 9",
  fontSize: "clamp(1rem, 1vw + 0.5rem, 2rem)",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  transition: "transform 200ms ease-in-out",
  backdropFilter: "blur(4px)",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:focus": {
    transform: "scale(1.05)",
    outline: "none",
  },
});

const BlurDiv = styled(Box)<{ indexval: number; blurs: number; blurval: number }>(({ indexval, blurs, blurval }) => ({
  position: "absolute",
  inset: 0,
  zIndex: indexval,
  mask: `linear-gradient(90deg,
      transparent calc(${indexval} * calc((100 / ${blurs}) * 1%)),
      black calc((${indexval} + 1) * calc((100 / ${blurs}) * 1%)),
      black calc((${indexval} + 2) * calc((100 / ${blurs}) * 1%)),
      transparent calc((${indexval} + 3) * calc((100 / ${blurs}) * 1%)))`,
  WebkitMask: `linear-gradient(90deg,
      transparent calc(${indexval} * calc((100 / ${blurs}) * 1%)),
      black calc((${indexval} + 1) * calc((100 / ${blurs}) * 1%)),
      black calc((${indexval} + 2) * calc((100 / ${blurs}) * 1%)),
      transparent calc((${indexval} + 3) * calc((100 / ${blurs}) * 1%)))`,
  backdropFilter: `blur(calc((${indexval} * ${blurval}) * 1px))`,
  WebkitBackdropFilter: `blur(calc((${indexval} * ${blurval}) * 1px))`,
}));

const BlurContainer = styled(Box)<{ position: "left" | "right" }>(({ position }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "25%",
  zIndex: 2,
  pointerEvents: "none",
  left: position === "left" ? 0 : "auto",
  right: position === "right" ? 0 : "auto",
  rotate: position === "left" ? "180deg" : "0deg",
}));

export function SlidingLogoMarquee({
  items,
  speed = 1,
  pauseOnHover = true,
  enableBlur = true,
  blurIntensity = 1,
  height = "100px",
  width = "100%",
  gap = "2rem",
  scale = 1,
  direction = "horizontal",
  autoPlay = true,
  backgroundColor = "transparent",
  showGridBackground = false,
  className,
  onItemClick,
  enableSpillEffect = false,
  animationSteps = 8,
  showControls = true,
}: SlidingLogoMarqueeProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const duration = `${200 / speed}s`;

  const handleItemClick = (item: SlidingLogoMarqueeItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    onItemClick?.(item);
  };

  const togglePlayState = () => {
    setIsPlaying(!isPlaying);
  };

  const blurDivs = Array.from({ length: animationSteps }, (_, index) => (
    <BlurDiv key={index} indexval={index} blurs={animationSteps} blurval={blurIntensity} />
  ));

  const itemRenderer = (item: SlidingLogoMarqueeItem, index: number, isDuplicate: boolean) => (
    <MarqueeItem
      key={`${item.id}-${index}-${isDuplicate ? "dup" : "orig"}`}
      onClick={() => handleItemClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleItemClick(item);
        }
      }}
    >
      <Box sx={{ height: "80%", width: "auto" }}>{item.content}</Box>
    </MarqueeItem>
  );

  return (
    <MarqueeContainer
      className={className}
      sx={{ width }}
      scaleval={scale}
      bg={backgroundColor}
      onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
      onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
    >
      {showGridBackground && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.05,
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      )}

      <MarqueeResizable h={height} spill={enableSpillEffect}>
        <MarqueeInner scaleval={scale} spill={enableSpillEffect}>
          {enableBlur && <BlurContainer position="left">{blurDivs}</BlurContainer>}

          <MarqueeList direction={direction} duration={duration} gap={gap} isPlaying={isPlaying}>
            {items.map((item, index) => itemRenderer(item, index, false))}
            {items.map((item, index) => itemRenderer(item, index, true))}
          </MarqueeList>

          {enableBlur && <BlurContainer position="right">{blurDivs}</BlurContainer>}
        </MarqueeInner>
      </MarqueeResizable>

      {showControls && (
        <IconButton
          onClick={togglePlayState}
          aria-label={isPlaying ? "Pause animation" : "Play animation"}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(31, 41, 55, 0.5)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(55, 65, 81, 0.7)",
            },
            padding: 1,
          }}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </IconButton>
      )}
    </MarqueeContainer>
  );
}

export default SlidingLogoMarquee;
