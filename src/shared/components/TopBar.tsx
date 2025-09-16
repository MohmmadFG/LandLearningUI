import React from "react";
import { styled } from "../styles/stitches.config";
import Logo from "./logo";
import type { ReactNode } from "react";
const ContinerTopBar = styled("div", {
  width: "100%",
  height: "48px",
  padding: "24px 12px",
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#FFF",
  boxShadow: "4px 4px 10px 0 #020B12",
  "@media (max-width: 768px)": {
    height: "auto",
    gap: "16px",
    padding: "8px 8px",
    flexWrap: "wrap",
  },

  "@media (max-width: 480px)": {
    height: "auto",
    gap: "8px",
    padding: "4px 4px",
    flexWrap: "wrap",
  },
  variants: {
    bgColor: {
      default: { backgroundColor: "#FFF" },
      secondary: { backgroundColor: "rgba(0,0,0,0)" },
    },
    Shodw: {
      default: { boxShadow: "4px 4px 10px 0 #020B12" },
      secondary: { boxShadow: "none" },
    },
  },
});
type ContinerTopBarVariant = "secondary" | "default";
type ColorVariantLogo = "primary" | "secondary" | "white";

function TopBarOut({
  children,
  variantBackgroun,
  boxShdowmode,
  colorLogo,
}: {
  children: ReactNode;
  variantBackgroun: ContinerTopBarVariant;
  boxShdowmode: ContinerTopBarVariant;
  colorLogo: ColorVariantLogo;
}) {
  return (
    <ContinerTopBar bgColor={variantBackgroun} Shodw={boxShdowmode}>
      <Logo colorvariant={colorLogo} />
      {children}
    </ContinerTopBar>
  );
}
const TopBar = React.memo(TopBarOut, (prevProps, next) => {
  return (
    prevProps.boxShdowmode === next.boxShdowmode &&
    prevProps.children === next.children &&
    prevProps.colorLogo === next.colorLogo &&
    prevProps.variantBackgroun === next.variantBackgroun
  );
});
export default TopBar;
