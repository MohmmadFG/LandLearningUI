import { styled } from "../../../shared/styles/stitches.config";

const HeaderTitle = styled("h1", {
  color: "$primary",
  textAlign: "center",
  textShadow: "$TextShadow",
  fontFamily: "$heading",
  fontSize: "$title",
  fontWeight: "600",
  letterSpacing: "0.9px",
  textTransform: "capitalize",
  margin: "8px 0px",
  lineHeight: "normal",
});

export function Header({ children }: { children: React.ReactNode }) {
  return <HeaderTitle>{children}</HeaderTitle>;
}
