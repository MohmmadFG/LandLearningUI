import React from "react";
import { styled } from "../styles/stitches.config";
import { useTranslation } from "react-i18next";

const ContinerinfoFled = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  height: "32px",
});

const Icon = styled("img", {
  height: "$iconSize",
  width: "$iconSize",
  aspectRatio: "1/1",
});

const IconsTetx = styled("p", {
  color: "$secondary",
  textAlign: "left",
  leadingTrim: "both",
  textEdge: "cap",
  fontFamily: "$body",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  letterSpacing: "0.6px",
  textTransform: "lowercase",
  textDecorationColor: "$secondary",
  "&:hover": {
    color: "$primary",
    cursor: "pointer",
  },
});




function InfoAboutFledsOut({
  label,
  srcIcon,
}: {
  label: string;
  srcIcon: string;
}) {
  const { t } = useTranslation();

  return (
    <ContinerinfoFled>
      <Icon src={srcIcon} />
      <IconsTetx>{t(`validation.${label}`)}</IconsTetx>
    </ContinerinfoFled>
  );
}
const InfoAboutFleds = React.memo(InfoAboutFledsOut, (prevProps, nextProps) => {
  return (
    prevProps.label === nextProps.label &&
    prevProps.srcIcon === nextProps.srcIcon
  );
});

export default InfoAboutFleds;
