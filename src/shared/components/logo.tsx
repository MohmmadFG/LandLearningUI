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

function LogoOut({ colorvariant }: { colorvariant: ColorVariant }) {
  return <LogoComp colorScheme={colorvariant}>landLearning</LogoComp>;
}
const Logo = React.memo(LogoOut ,
(prevProps,nextProps) =>{
  return (
     prevProps.colorvariant === nextProps.colorvariant
  );
}
)

export  default Logo;