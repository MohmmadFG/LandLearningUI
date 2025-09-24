import React, { useMemo } from "react";
import Logo from "./logo";

import type { DropMenusinfo } from "../models/DropMenusinfo";
import type { TopBarLink } from "../models/LinkeTopbar";
import ContainerNavbar from "./ContainerNavbar";
import { LinksBar } from "./LinksBar";
import DropMenu from "./DropMeunu";
import ContainerTopBarMemo from "./ContainerTopBar";
function TopBarOut({
  variantBackground,
  boxShadowMode,
  colorLogo,
  leftItemLink,
  leftItemDropMenu,
  rightItemLink,
  rightItemDropMenu,
}: {
  variantBackground: "secondary" | "default";
  boxShadowMode: "secondary" | "default";
  colorLogo: "primary" | "secondary" | "white";
  leftItemLink: TopBarLink[];
  leftItemDropMenu: DropMenusinfo[];
  rightItemLink: TopBarLink[];
  rightItemDropMenu: DropMenusinfo[];
}) {
  const memoTrans1 = useMemo(
    () => (
      <ContainerNavbar>
        {leftItemLink.map((iteam, index) => (
          <LinksBar
            key={index}
            nameLabel={iteam.nameLabel}
            urlIcon={iteam.urlIcon}
            Pageurl={iteam.pageUrl}
            withLabel={iteam.withLabel}
            colorlabel={iteam.colorLabel}
          />
        ))}
        {leftItemDropMenu.map((dropiteam, index) => {
          return (
            <DropMenu
              key={index}
              Trigger={dropiteam.Trigger}
              Items={dropiteam.Items}
              colorBackground={dropiteam.colorBackground}
            />
          );
        })}
      </ContainerNavbar>
    ),
    [leftItemLink, leftItemDropMenu]
  );
  const memoTrans2 = useMemo(
    () => (
      <ContainerNavbar>
        {rightItemLink.map((iteam, index) => (
          <LinksBar
            key={index}
            nameLabel={iteam.nameLabel}
            urlIcon={iteam.urlIcon}
            Pageurl={iteam.pageUrl}
            withLabel={iteam.withLabel}
            colorlabel={iteam.colorLabel}
          />
        ))}
        {rightItemDropMenu.map((dropiteam, index) => {
          return (
            <DropMenu
              key={index}
              Trigger={dropiteam.Trigger}
              Items={dropiteam.Items}
              colorBackground={dropiteam.colorBackground}
            />
          );
        })}
      </ContainerNavbar>
    ),
    [rightItemLink, rightItemDropMenu]
  );

  return (
    <ContainerTopBarMemo
      boxShadowMode={boxShadowMode}
      variantBackground={variantBackground}
    >
      <Logo colorVariant={colorLogo} />
      {memoTrans1}
      {memoTrans2}
    </ContainerTopBarMemo>
  );
}
const TopBar = React.memo(TopBarOut, (prevProps, next) => {
  return (
    prevProps.boxShadowMode === next.boxShadowMode &&
    prevProps.colorLogo === next.colorLogo &&
    prevProps.variantBackground === next.variantBackground
  );
});
export default TopBar;
