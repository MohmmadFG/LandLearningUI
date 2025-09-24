import React from "react";
import { styled } from "../styles/stitches.config";
import { useTranslation } from "react-i18next";

const ButtonComp = styled("button", {
  display: "flex",

  padding: "$paddingButton",
  justifyContent: "center",
  alignItems: "center",
  gap: "1px",
  flexShrink: 0,
  borderRadius: "8px",
  background: "$secondary",
  boxShadow: "$button",
  color: "#fff",
  textAlign: "center",
  fontFamily: "$body",
  fontSize: "$button",
  fontStyle: "normal",
  fontWeight: "400",
  textTransform: "capitalize",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  top: "46px",

  "&:hover": {
    background: "$primary",
    cursor: "pointer",
    color: "White",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(56, 82, 247, 0.4)",
  },
});

function ButtonComponetOut({
  labelName,
  width = "86px",
  height = "42px",
  onClick,
  withIcon = false,
  srcIcon = "",
  color = "#fff",
  customTop = "46px",
  positionImg = "relative",
  rightImg = "0px",
  bottomImg = "0px",
  ...props
}: {
  positionImg?:
    | "absolute"
    | "fixed"
    | "relative"
    | "sticky"
    | "static"
    | undefined;
  rightImg?: string;
  bottomImg?: string;
  withIcon?: boolean;
  srcIcon?: string;
  labelName: string;
  height?: string;
  width?: string;
  color?: string;
  customTop?: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <ButtonComp
      type="submit"
      style={{
        width: width,
        height: height,
        top: customTop,
        color: color,
      }}
      onClick={onClick}
      {...props}
    >
      {withIcon && srcIcon.length > 2 && (
        <img
          src={srcIcon}
          width={26}
          height={26}
          style={{
            display: "block",
            bottom: bottomImg,
            right: rightImg,
            position: positionImg,
          }}
        />
      )}
      {t(labelName)}
    </ButtonComp>
  );
}
const ButtonComponent = React.memo(
  ButtonComponetOut,
  (prevProps, nextProps) => {
    return (
      prevProps.height === nextProps.height &&
      prevProps.labelName === nextProps.labelName &&
      prevProps.onClick === nextProps.onClick &&
      prevProps.width === nextProps.width &&
      prevProps.srcIcon === nextProps.srcIcon &&
      prevProps.withIcon === nextProps.withIcon &&
      prevProps.customTop === nextProps.customTop &&
      prevProps.color === nextProps.color &&
      prevProps.bottomImg === nextProps.bottomImg &&
      prevProps.rightImg === nextProps.rightImg &&
      prevProps.positionImg === nextProps.positionImg
    );
  }
);
export default ButtonComponent;
