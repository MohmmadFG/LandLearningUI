import { styled } from "../styles/stitches.config";
import React from "react";
const LogoComp = styled("h3", {
  color: "$primary",
  fontSize: "26px",
  fontWeight: 600,
  letterSpacing: "0.52px",
  textTransform: "capitalize",
  fontFamily: "$heading",
  variants: {
    colorScheme: {
      primary: { color: "$primary" },
      secondary: { color: "$secondary" },
      white: { color: "White" },
    },
  },
});
type ColorVariant = "primary" | "secondary" | "white";

function LogoOut({ colorVariant }: { colorVariant: ColorVariant }) {
  return <LogoComp colorScheme={colorVariant}>landLearning</LogoComp>;
}
const Logo = React.memo(LogoOut, (prevProps, nextProps) => {
  return prevProps.colorVariant === nextProps.colorVariant;
});

export default Logo;
