import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { styled } from "../styles/stitches.config";
import type { TypeDropMenuItem } from "../TypesInterface/TypeDropMenuItem";
import React from "react";
import { useState } from "react";
const Ico = styled("img", {
  width: "26px",
  height: "26px",
});

export default function Dropmun({
  Trigger,
  Items,
  colorBackgorund,
}: {
  Trigger: string;
  Items: TypeDropMenuItem[];
  colorBackgorund: string;
  colorElm?: string;
}) {
  const [open, setOpen] = useState(false);
  const Dropmenuitem = styled(DropdownMenuItem, {
    cursor: "pointer",
    color: "$primary",
    backgroundColor: colorBackgorund,
    "&:hover": {
      backgroundColor: "$thread",
      color: "WhiteSmoke",
    },
  });
  const TransFormation = Items.map((item, index) => (
    <React.Fragment key={index}>
      <Dropmenuitem onClick={item.onClick}>{item.label}</Dropmenuitem>
      {index < Items.length - 1 && <DropdownMenuSeparator />}
    </React.Fragment>
  ));

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
        {TransFormation}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
