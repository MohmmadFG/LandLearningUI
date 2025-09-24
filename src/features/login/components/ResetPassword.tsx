import React from "react";
import { styled } from "../../../shared/styles/stitches.config";
import { useTranslation } from "react-i18next";

const ContainerResetPassword = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  height: "32px",
});

const IconReset = styled("p", {
  height: "$iconSize",
  width: "$iconSize",
  aspectRatio: "1/1",
  background: `url("/icons8-password-50.png") center / cover no-repeat`,
});

const ResetIcon = styled("p", {
  color: "$secondary",
  textAlign: "center",
  leadingTrim: "both",
  textEdge: "cap",
  fontFamily: "$body",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  letterSpacing: "1.2px",
  textTransform: "capitalize",
  textDecoration: "underline solid ",
  textDecorationColor: "$secondary",
  textUnderlineOffset: "4px",
  "&:hover": {
    color: "$primary",
    cursor: "pointer",
  },
});

function ResetPasswordOut({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation();

  return (
    <ContainerResetPassword>
      <IconReset />
      <ResetIcon onClick={onClick}>{t("ResetPassword")}</ResetIcon>
    </ContainerResetPassword>
  );
}
const ResetPassword = React.memo(ResetPasswordOut, (prevProps, nextProps) => {
  return prevProps.onClick === nextProps.onClick;
});

export default ResetPassword;
