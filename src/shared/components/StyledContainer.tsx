import { styled } from "../styles/stitches.config";
import React, { forwardRef } from "react";

const StyleContainer = styled("div", {
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

interface StyledContainerProps {
  children: React.ReactNode;
  customWidth?: string;
  customHeight?: string;
  top?: string;
}

const StyledContainer = forwardRef<HTMLDivElement, StyledContainerProps>(
  ({ children, customWidth, customHeight, top }, ref) => (
    <StyleContainer
      ref={ref}
      style={{
        width: customWidth || "384px",
        height: customHeight || "454px",
        top: top,
      }}
    >
      {children}
    </StyleContainer>
  )
);

export default StyledContainer;
