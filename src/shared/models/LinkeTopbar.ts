import type { VariantLinkLabelColor } from "../components/LinksBar";

interface TopBarLink {
  colorLabel: VariantLinkLabelColor;
  withLabel: boolean;
  nameLabel?: string;
  urlIcon: string;
  pageUrl?: string;
}

export type { TopBarLink };
