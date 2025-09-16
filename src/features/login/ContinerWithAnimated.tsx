import { useSpring, animated } from "@react-spring/web";
import StyledContiner from "./ContinerStyle";

export default function ContinerWithAnimatedAndStyle({
  children,
}: {
  children: React.ReactNode;
}) {
  const fadeIn = useSpring({
    from: { opacity: 0, filter: "blur(4px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { duration: 700 },
  });
  const Contneranimated = animated(StyledContiner);
  return <Contneranimated style={fadeIn}>{children}</Contneranimated>;
}
