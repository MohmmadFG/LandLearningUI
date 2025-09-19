import { styled } from "@stitches/react";
import type { ReactNode } from "react";
import React from "react";

const Continer = styled("nav", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
});

function ContinerNavtobarOut({ children }: { children: ReactNode }) {
  return <Continer>{children}</Continer>;
}
const ContinerNavtobar = React.memo(ContinerNavtobarOut, (prev, next) => {
  return prev.children === next.children;
});
export default ContinerNavtobar;
