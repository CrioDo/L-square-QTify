import React from "react";
import { Button as MUIButton } from "@mui/material";

const Button = ({
  text,
  onClick,
  variant = "contained",
  // color = "primary",
  size = "medium",
  sx = {},
  disabled = false,
  fullWidth = false,
  type = "button",
}) => {
  return (
    <MUIButton
      variant={variant}
      // color={color}
      size={size}
      onClick={onClick}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        fontWeight: 600,
        ...sx,
      }}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
