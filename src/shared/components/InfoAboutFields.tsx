import React from "react";
import { styled } from "../styles/stitches.config";
import { useTranslation } from "react-i18next";

const ContainerInfoField = styled("div", {
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

const IconText = styled("p", {
  color: "red",
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
});

export default function InfoAboutFields({
  label,
  srcIcon,
  color = "red",
}: {
  label: string;
  srcIcon: string;
  color?: string;
}) {
  const { t } = useTranslation();

  return (
    <ContainerInfoField>
      <Icon src={srcIcon} />
      <IconText style={{ color: color }}>{t(`validation.${label}`)}</IconText>
    </ContainerInfoField>
  );
}
