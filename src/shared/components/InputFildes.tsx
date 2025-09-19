import React from "react";
import { styled } from "../styles/stitches.config";
import { useTranslation } from "react-i18next";

const Continerfilde = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  flexShrink: "0",
});

const Label = styled("label", {
  alignSelf: "stretch",
  width: "100%",
  color: "$primary",
  fontFamily: "$heading",
  fontSize: "$label",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "0.99px",
  textTransform: "capitalize",
});

const InpuFild = styled("input", {
  height: "$inputHeight",
  flexShrink: 0,
  width: "100%",
  alignSelf: "stretch",
  borderRadius: "$field",
  border: "1px solid #1e1e1e",
  outline: "none",
  background: "#fff",
  color: "$secondary",
  fontFamily: "$body",
  fontSize: "$input",
  fontWeight: "400",
  padding: "$inputPadding",
  "&:focus": {
    border: "1px solid #3852f7",
  },
});

export default function InputTextFilds({
  labelName,
  type,
  widthDev = "100%",
  fontSize = "20px",
  ...props
}: {
  labelName: string;
  type: string;
  widthDev?: string;
  fontSize?: string;
}) {
  const { t } = useTranslation();

  return (
    <Continerfilde style={{ width: widthDev }}>
      <Label>{t(labelName)}</Label>
      <InpuFild
        style={{ fontSize }}
        {...props}
        placeholder={t(`Enteryour${labelName}`)}
        type={type}
      />
    </Continerfilde>
  );
}
