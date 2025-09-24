import { styled } from "../styles/stitches.config";
import { useTranslation } from "react-i18next";

const ContainerField = styled("div", {
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

const InputField = styled("input", {
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

export default function InputTextField({
  labelText,
  type,
  height = "36px",
  width = "100%",
  fontSize = "20px",
  ...props
}: {
  labelText: string;
  type: string;
  width?: string;
  fontSize?: string;
  height?: string;
}) {
  const { t } = useTranslation();

  return (
    <ContainerField style={{ width: width }}>
      <Label>{t(labelText)}</Label>
      <InputField
        style={{ fontSize, height: height }}
        {...props}
        placeholder={t(`Enteryour${labelText}`)}
        type={type}
      />
    </ContainerField>
  );
}
