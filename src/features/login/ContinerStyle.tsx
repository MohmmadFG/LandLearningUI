import { styled } from "../../shared/styles/stitches.config";
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

const StyledContiner = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>((props, ref) => <StyleContiner ref={ref}>{props.children}</StyleContiner>);

export default StyledContiner;
