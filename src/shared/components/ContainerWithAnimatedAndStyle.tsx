import { useSpring, animated } from "@react-spring/web";
import StyledContiner from "./StyledContainer";

export default function ContainerWithAnimatedAndStyle({
  children,
  customWidth,
  customHeight = "454px",
  top = "42px",
}: {
  top?: string;
  children: React.ReactNode;
  customWidth?: string;
  customHeight?: string;
}) {
  const fadeIn = useSpring({
    from: { opacity: 0, filter: "blur(4px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { duration: 700 },
  });
  const Contneranimated = animated(StyledContiner);
  return (
    <Contneranimated
      customWidth={customWidth}
      customHeight={customHeight}
      style={fadeIn}
      top={top}
    >
      {children}
    </Contneranimated>
  );
}
