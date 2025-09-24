import React from "react";
import { styled } from "../styles/stitches.config";
import { useSpring, animated } from "@react-spring/web";

const ContainerWrong = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$textColGap",
});

const IconWrong = styled("img", {
  width: "$iconSize",
  height: "$iconSize",
});

const MessageWrong = styled("p", {
  color: "$error",
  textAlign: "center",
  fontFamily: "$body",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",
  letterSpacing: "0.16px",
  textTransform: "capitalize",
  padding: "0px",
  margin: "0px",
});

export default function WrongForm({ Message }: { Message: string }) {
  const fadeIn = useSpring({
    from: { opacity: 0, filter: "blur(3px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { duration: 700 },
  });
  const MessageWithAnimated = animated(MessageWrong);

  return (
    <ContainerWrong>
      <IconWrong src="https://img.icons8.com/fluency-systems-filled/26/FA5252/circled-x.png" />
      <MessageWithAnimated style={fadeIn}>{Message} </MessageWithAnimated>
    </ContainerWrong>
  );
}
