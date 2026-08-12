import { Button, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface APPBUTTON_PROPS {
  children: ReactNode;
  sx?: SxProps;
}

const AppButton = ({ children, sx }: APPBUTTON_PROPS) => {
  return (
    <Button
      sx={{
        ...sx,
        backgroundColor: "rgba(255,255,255,0.24)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        borderRadius: "100px",
        textTransform: "none",
        px: 3,
        py: 1.25,
        color: "white",
        boxShadow: "inset 0px 0px 8px rgba(255,255,255,0.25)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.32)" },
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
