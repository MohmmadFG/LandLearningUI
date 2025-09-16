import { styled } from "../../shared/styles/stitches.config";

export function HaderContiner({ children }: { children: React.ReactNode }) {
  const HaderForm = styled("h1", {
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

  return <HaderForm>{children}</HaderForm>;
}
