import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { styled } from "../styles/stitches.config";
import type { Items } from "../TypesInterface/DropMenusinfo";
import React, { useCallback } from "react";
import { useState } from "react";
const IcoOut = styled("img", {
  width: "26px",
  height: "26px",
});

const Ico = React.memo(IcoOut, (prev, next) => {
  return prev === next;
});
function DropmunOut({
  Trigger,
  Items,
  colorBackgorund,
}: {
  Trigger: string;
  Items: Items[];
  colorBackgorund: string;
  colorElm?: string;
}) {
  const [open, setOpen] = useState(false);
  const DropmenuitemOut = styled(DropdownMenuItem, {
    cursor: "pointer",
    color: "$primary",
    backgroundColor: colorBackgorund,
    "&:hover": {
      backgroundColor: "$thread",
      color: "WhiteSmoke",
    },
  });
  const Dropmenuitem = React.memo(DropmenuitemOut, (prev, next) => {
    return prev === next;
  });
  const TransFormation = useCallback(() => {
    return Items.map((item, index) => (
      <React.Fragment key={index}>
        <Dropmenuitem onClick={item.onClick}>{item.label}</Dropmenuitem>
        {index < Items.length - 1 && <DropdownMenuSeparator />}
      </React.Fragment>
    ));
  }, [Items]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {Trigger.endsWith(".png") && (
        <DropdownMenuTrigger asChild>
          <Ico src={Trigger} onMouseEnter={() => setOpen(true)}></Ico>
        </DropdownMenuTrigger>
      )}
      {!Trigger.endsWith(".png") && (
        <DropdownMenuTrigger>
          <button>{Trigger}</button>
        </DropdownMenuTrigger>
      )}
      <DropdownMenuContent
        style={{
          backgroundColor: colorBackgorund,
        }}
      >
        {TransFormation()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
const Dropmun = React.memo(DropmunOut, (prev, next) => {
  return (
    prev.Items === next.Items &&
    prev.colorElm === next.colorElm &&
    prev.colorBackgorund === next.colorBackgorund &&
    prev.Trigger === next.Trigger
  );
});
export default Dropmun;
