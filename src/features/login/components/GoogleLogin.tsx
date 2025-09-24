import React from "react";
import { styled } from "../../../shared/styles/stitches.config";
import { useTranslation } from "react-i18next";

const ContainerGoogleLogin = styled("div", {
  display: "flex",
  height: "34px",
  padding: "3px 41px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  gap: "8px",
  flexShrink: 0,
  borderRadius: "4px",
  border: "2px solid #000",
  background: "$secondary",
  paddingTop: "4px",
  paddingBottom: "4px",
  "&:hover": {
    backgroundColor: "$hover",
    cursor: "pointer",
  },
});

const ButtonLabel = styled("p", {
  color: "white",
  fontFamily: "Sofia Sans Extra Condensed",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",
  letterSpacing: "0.96px",
  textTransform: "uppercase",
  leadingTrim: "both",
  textEdge: "cap",
});

function GoogleLogInOut({
  onClick,
  width,
}: {
  onClick: () => void;
  width: string;
}) {
  const { t } = useTranslation();

  return (
    <ContainerGoogleLogin onClick={onClick} style={{ width: width }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 22 24"
        fill="none"
      >
        <path
          d="M21.7861 9.6498H20.9V9.6H11V14.4H17.2167C16.3097 17.1942 13.8727 19.2 11 19.2C7.35515 19.2 4.4 15.9762 4.4 12C4.4 8.0238 7.35515 4.8 11 4.8C12.6825 4.8 14.2131 5.4924 15.3786 6.6234L18.4899 3.2292C16.5253 1.2318 13.8974 0 11 0C4.92525 0 0 5.373 0 12C0 18.627 4.92525 24 11 24C17.0748 24 22 18.627 22 12C22 11.1954 21.9241 10.41 21.7861 9.6498Z"
          fill="#FFC107"
        />
        <path
          d="M1.2683 6.4146L4.88235 9.306C5.86025 6.6648 8.22855 4.8 11 4.8C12.6825 4.8 14.2131 5.4924 15.3786 6.6234L18.4899 3.2292C16.5253 1.2318 13.8974 0 11 0C6.7749 0 3.1108 2.6022 1.2683 6.4146Z"
          fill="#FF3D00"
        />
        <path
          d="M11 24C13.8413 24 16.423 22.8138 18.375 20.8848L14.9705 17.742C13.8661 18.6546 12.4932 19.2 11 19.2C8.1389 19.2 5.70955 17.2098 4.79435 14.4324L1.20725 17.4474C3.02775 21.3336 6.72485 24 11 24Z"
          fill="#4CAF50"
        />
        <path
          d="M21.7861 9.6498H20.9V9.6H11V14.4H17.2167C16.7811 15.7422 15.9896 16.8996 14.9688 17.7426L14.9705 17.742L18.375 20.8848C18.1341 21.1236 22 18 22 12C22 11.1954 21.9241 10.41 21.7861 9.6498Z"
          fill="#1976D2"
        />
      </svg>
      <ButtonLabel>{t("GoogleLogin")}</ButtonLabel>
    </ContainerGoogleLogin>
  );
}

const GoogleLogin = React.memo(GoogleLogInOut, (prevProps, nextProps) => {
  return (
    prevProps.onClick === nextProps.onClick &&
    prevProps.width === nextProps.width
  );
});
export default GoogleLogin;
