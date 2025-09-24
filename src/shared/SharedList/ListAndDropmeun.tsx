import type { LinkTopBar } from "@/shared/models/LinkeTopbar";

export const leftLinkBlock: LinkTopBar[] = [
  {
    colorLabel: "FontWhite",
    withLabel: true,
    nameLabel: "Suggestions",
    pageUrl: "Suggestions",
    urlIcon: "/icons8-communication-48.png",
  },
  {
    colorLabel: "FontWhite",
    withLabel: true,
    nameLabel: "Support",
    pageUrl: "Support",
    urlIcon: "/icons8-support-60.png",
  },
  {
    colorLabel: "FontWhite",
    withLabel: true,
    nameLabel: "Subscription",
    pageUrl: "Subscription",
    urlIcon: "/icons8-arrow-24.png",
  },
];

export const rightLinkBlock: LinkTopBar[] = [
  {
    colorLabel: "FontWhite",
    withLabel: false,
    urlIcon: "/icons8-settings-5.png",
    pageUrl: "/setting",
  },
  {
    colorLabel: "FontWhite",
    withLabel: false,
    urlIcon: "/icons8-notification-64.png",
  },
];
