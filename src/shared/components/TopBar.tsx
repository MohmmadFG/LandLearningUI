import React, { useMemo } from "react";
import Logo from "./logo";

import type { DropMenusinfo } from "../TypesInterface/DropMenusinfo";
import type { LinkeTopbar } from "../TypesInterface/LinkeTopbar";
import ContinerNavtobar from "./ContinerLinkeTopBar";
import { LinkIconWithLableOrWithOut } from "./LinkIconWithLableOrWithOut";
import Dropmun from "./DropMeunu";
import ContinerTopBarMemo from "./ContinerTopBar";
function TopBarOut({
  variantBackgroun,
  boxShdowmode,
  colorLogo,
  leftiteamLink,
  leftiteamDropmenu,
  RightiteamLink,
  RightiteamDropmena,
}: {
  variantBackgroun: "secondary" | "default";
  boxShdowmode: "secondary" | "default";
  colorLogo: "primary" | "secondary" | "white";
  leftiteamLink: LinkeTopbar[];
  leftiteamDropmenu: DropMenusinfo[];
  RightiteamLink: LinkeTopbar[];
  RightiteamDropmena: DropMenusinfo[];
}) {
  const memoTrans1 = useMemo(
    () => (
      <ContinerNavtobar>
        {leftiteamLink.map((iteam, index) => (
          <LinkIconWithLableOrWithOut
            key={index}
            nameLabel={iteam.nameLabel}
            urlIcon={iteam.urlIcon}
            Pageurl={iteam.Pageurl}
            withLabel={iteam.withLabel}
            colorlabel={iteam.colorlabel}
          />
        ))}
        {leftiteamDropmenu.map((dropiteam, index) => {
          return (
            <Dropmun
              key={index}
              Trigger={dropiteam.Trigger}
              Items={dropiteam.Items}
              colorBackgorund={dropiteam.colorBackgorund}
            />
          );
        })}
      </ContinerNavtobar>
    ),
    [leftiteamLink, leftiteamDropmenu]
  );
  const memoTrans2 = useMemo(
    () => (
      <ContinerNavtobar>
        {RightiteamLink.map((iteam, index) => (
          <LinkIconWithLableOrWithOut
            key={index}
            nameLabel={iteam.nameLabel}
            urlIcon={iteam.urlIcon}
            Pageurl={iteam.Pageurl}
            withLabel={iteam.withLabel}
            colorlabel={iteam.colorlabel}
          />
        ))}
        {RightiteamDropmena.map((dropiteam, index) => {
          return (
            <Dropmun
              key={index}
              Trigger={dropiteam.Trigger}
              Items={dropiteam.Items}
              colorBackgorund={dropiteam.colorBackgorund}
            />
          );
        })}
      </ContinerNavtobar>
    ),
    [RightiteamLink, RightiteamDropmena]
  );

  return (
    <ContinerTopBarMemo
      boxShdowmode={boxShdowmode}
      variantBackgroun={variantBackgroun}
    >
      <Logo colorvariant={colorLogo} />
      {memoTrans1}
      {memoTrans2}
    </ContinerTopBarMemo>
  );
}
const TopBar = React.memo(TopBarOut, (prevProps, next) => {
  return (
    prevProps.boxShdowmode === next.boxShdowmode &&
    prevProps.colorLogo === next.colorLogo &&
    prevProps.variantBackgroun === next.variantBackgroun
  );
});
export default TopBar;
