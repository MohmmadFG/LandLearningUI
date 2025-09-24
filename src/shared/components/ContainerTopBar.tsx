import type { ReactNode } from "react";
import { styled } from "../styles/stitches.config";
import React from "react";

const ContainerTopBar = styled("div", {
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
    Shadow: {
      default: { boxShadow: "4px 4px 10px 0 #020B12" },
      secondary: { boxShadow: "none" },
    },
  },
});

function ContainerTopBarOut({
  children,
  variantBackground,
  boxShadowMode,
}: {
  children: ReactNode;
  variantBackground: "secondary" | "default";
  boxShadowMode: "secondary" | "default";
}) {
  return (
    <ContainerTopBar bgColor={variantBackground} Shadow={boxShadowMode}>
      {children}
    </ContainerTopBar>
  );
}

const ContainerTopBarMemo = React.memo(ContainerTopBarOut, (prev, next) => {
  return (
    prev.boxShadowMode === next.boxShadowMode &&
    prev.variantBackground === next.variantBackground
  );
});
export default ContainerTopBarMemo;
