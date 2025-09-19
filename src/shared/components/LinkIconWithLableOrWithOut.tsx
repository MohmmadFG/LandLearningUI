import React from "react";
import { styled } from "../styles/stitches.config";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Combine = styled("div", {
  display: "flex",
  width: "max-content",
  height: "fit-content",
  alignItems: "center",
  alignContent: "center",
  gap: "8px",

  "&:hover": {
    textDecoration: "underline 3px",
    textDecorationColor: "$secondary",
    textUnderlineOffset: "8px",
    transition: "all 0.2s ease",
  },
});

const Icon = styled("img", {
  width: "24px",
  height: "24px",
});

const LabelIcon = styled(Link, {
  color: "$thread",
  fontFamily: "Reddit Sans Condensed",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.18px",
  textTransform: "capitalize",

  "@media (max-width: 768px)": {
    fontSize: "14px",
  },
  "@media (max-width: 480px)": {
    fontSize: "12px",
  },
  variants: {
    variColor: {
      defult: { color: "$secondary" },
      bluedark: { color: "$primary" },
      FontWhite: { color: "White" },
    },
  },
});

type VareLinkLabelcolor = "FontWhite" | "bluedark" | "FontWhite";

function LinkIconWithLableOrWithOutComponent({
  nameLabel = "",
  urlIcon,
  Pageurl = "",
  withLabel,
  colorlabel,
}: {
  nameLabel?: string;
  urlIcon: string;
  Pageurl?: string;
  withLabel: boolean;
  colorlabel: VareLinkLabelcolor;
}) {
  const { t } = useTranslation();

  return withLabel ? (
    <Combine>
      <Icon src={urlIcon} alt={nameLabel} />
      <LabelIcon variColor={colorlabel} to={`/${Pageurl}`}>
        {t(nameLabel)}
      </LabelIcon>
    </Combine>
  ) : (
    <LabelIcon to={`/${Pageurl}`}>
      <Icon src={urlIcon} alt={nameLabel} />
    </LabelIcon>
  );
}

const LinkIconWithLableOrWithOut = React.memo(
  LinkIconWithLableOrWithOutComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.nameLabel === nextProps.nameLabel &&
      prevProps.urlIcon === nextProps.urlIcon &&
      prevProps.Pageurl === nextProps.Pageurl &&
      prevProps.withLabel === nextProps.withLabel &&
      prevProps.colorlabel === nextProps.colorlabel
    );
  }
);

export { LinkIconWithLableOrWithOut };
export type { VareLinkLabelcolor };
