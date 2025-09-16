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
  lineHeight: "normal",
  textTransform: "capitalize",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  top: "46px",

  "&:hover": {
    background: "$primary",
    cursor: "pointer",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(56, 82, 247, 0.4)",
  },
});

function ButtonComponetOut({
  labelname,
  wight = "86px",
  hight = "42px",
  onClick,
  ...props
}: {
  labelname: string;
  hight?: string;
  wight?: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <ButtonComp
      type="submit"
      style={{
        width: wight,
        height: hight,
      }}
      onClick={onClick}
      {...props}
    >
      {t(labelname)}
    </ButtonComp>
  );
}
const ButtonComponet = React.memo(ButtonComponetOut, (prevProps, nextProps) => {
  return (
    prevProps.hight === nextProps.hight &&
    prevProps.labelname === nextProps.labelname &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.wight === nextProps.wight
  );
});
export default ButtonComponet;
