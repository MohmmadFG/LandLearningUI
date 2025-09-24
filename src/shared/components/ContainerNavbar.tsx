import { styled } from "@stitches/react";
import type { ReactNode } from "react";
import React from "react";

const Container = styled("nav", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
});

function ContainerNavbarOut({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
const ContainerNavbar = React.memo(ContainerNavbarOut, (prev, next) => {
  return prev.children === next.children;
});
export default ContainerNavbar;
