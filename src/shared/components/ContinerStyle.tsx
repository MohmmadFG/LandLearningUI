import { styled } from "../styles/stitches.config";
import React, { forwardRef } from "react";

const StyleContiner = styled("div", {
  padding: "$formPadding",
  width: "384px",
  height: "454px",
  flexShrink: 0,
  borderRadius: "$container",
  border: "$broderForm",
  backgroundColor: "#ffffff",
  boxShadow: "$box",
  display: "flex",
  flexDirection: "column",
  gap: "$elementGap",
  position: "relative",
  top: "42px",
});

interface StyledContinerProps {
  children: React.ReactNode;
  SpicWght?: string;
  Highcustom?: string;
}

const StyledContiner = forwardRef<HTMLDivElement, StyledContinerProps>(
  ({ children, SpicWght, Highcustom }, ref) => (
    <StyleContiner
      ref={ref}
      style={{
        width: SpicWght || "384px",
        height: Highcustom || "454px",
      }}
    >
      {children}
    </StyleContiner>
  )
);

export default StyledContiner;
