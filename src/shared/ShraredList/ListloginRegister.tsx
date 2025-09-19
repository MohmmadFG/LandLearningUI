import type { LinkeTopbar } from "@/shared/TypesInterface/LinkeTopbar";

export const leftLinklBlock: LinkeTopbar[] = [
  {
    colorlabel: "FontWhite",
    withLabel: true,
    nameLabel: "Suggestions",
    Pageurl: "Suggestions",
    urlIcon: "/icons8-communication-48.png",
  },
  {
    colorlabel: "FontWhite",
    withLabel: true,
    nameLabel: "Support",
    Pageurl: "Support",
    urlIcon: "/icons8-support-60.png",
  },
  {
    colorlabel: "FontWhite",
    withLabel: true,
    nameLabel: "Subscription",
    Pageurl: "Subscription",
    urlIcon: "/icons8-arrow-24.png",
  },
];

export const RghtLinklBlock: LinkeTopbar[] = [
  {
    colorlabel: "FontWhite",
    withLabel: false,
    urlIcon: "/icons8-settings-5.png",
    Pageurl: "/setting",
  },
  {
    colorlabel: "FontWhite",
    withLabel: false,
    urlIcon: "/icons8-notification-64.png",
  },
];
