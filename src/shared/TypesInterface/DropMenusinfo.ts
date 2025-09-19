interface Items {
  label: string;
  onClick: () => void | string | number;
}
interface DropMenusinfo {
  Trigger: string;
  Items: Items[];
  colorBackgorund: string;
}
export type { DropMenusinfo };
export type { Items };
