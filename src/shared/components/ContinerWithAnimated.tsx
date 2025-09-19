import { useSpring, animated } from "@react-spring/web";
import StyledContiner from "./ContinerStyle";

export default function ContinerWithAnimatedAndStyle({
  children,
  spibwith,
  Highcustom = "454px",
}: {
  children: React.ReactNode;
  spibwith?: string;
  Highcustom?: string;
}) {
  const fadeIn = useSpring({
    from: { opacity: 0, filter: "blur(4px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { duration: 700 },
  });
  const Contneranimated = animated(StyledContiner);
  return (
    <Contneranimated SpicWght={spibwith} Highcustom={Highcustom} style={fadeIn}>
      {children}
    </Contneranimated>
  );
}
