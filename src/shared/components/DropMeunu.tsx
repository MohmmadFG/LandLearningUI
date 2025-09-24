import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { styled } from "../styles/stitches.config";
import type { Items } from "../models/DropMenusinfo";
import React, { useCallback } from "react";
import { useState } from "react";
const IconOut = styled("img", {
  width: "26px",
  height: "26px",
});

const Icon = React.memo(IconOut, (prev, next) => {
  return prev === next;
});
function DropmenuOut({
  Trigger,
  Items,
  colorBackground,
}: {
  Trigger: string;
  Items: Items[];
  colorBackground: string;
  colorElm?: string;
}) {
  const [open, setOpen] = useState(false);
  const DropMenuItemOut = styled(DropdownMenuItem, {
    cursor: "pointer",
    color: "$primary",
    backgroundColor: colorBackground,
    "&:hover": {
      backgroundColor: "$thread",
      color: "WhiteSmoke",
    },
  });
  const DropMenuItem = React.memo(DropMenuItemOut, (prev, next) => {
    return prev === next;
  });
  const transformItems = useCallback(() => {
    return Items.map((item, index) => (
      <React.Fragment key={index}>
        <DropMenuItem onClick={item.onClick}>{item.label}</DropMenuItem>
        {index < Items.length - 1 && <DropdownMenuSeparator />}
      </React.Fragment>
    ));
  }, [Items]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {Trigger.endsWith(".png") && (
        <DropdownMenuTrigger asChild>
          <Icon src={Trigger} onMouseEnter={() => setOpen(true)}></Icon>
        </DropdownMenuTrigger>
      )}
      {!Trigger.endsWith(".png") && (
        <DropdownMenuTrigger>
          <button>{Trigger}</button>
        </DropdownMenuTrigger>
      )}
      <DropdownMenuContent
        style={{
          backgroundColor: colorBackground,
        }}
      >
        {transformItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
const DropMenu = React.memo(DropmenuOut, (prev, next) => {
  return (
    prev.Items === next.Items &&
    prev.colorElm === next.colorElm &&
    prev.colorBackground === next.colorBackground &&
    prev.Trigger === next.Trigger
  );
});
export default DropMenu;
