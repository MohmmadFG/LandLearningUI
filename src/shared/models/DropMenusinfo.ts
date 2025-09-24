interface Items {
  label: string;
  onClick: () => void;
}
interface DropMenusinfo {
  Trigger: string;
  Items: Items[];
  colorBackground: string;
}
export type { DropMenusinfo };
export type { Items };
