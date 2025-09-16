import { styled } from "@stitches/react";
import type { ReactNode } from "react";

const Continer = styled("nav", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
});

export default function ContinerNavtobar({
  children,
}: {
  children: ReactNode;
}) {
  return <Continer>{children}</Continer>;
}
