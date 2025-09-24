import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Items, DropMeminfo } from "../models/DropMenusinfo";
import { leftLinkBlock, rightLinkBlock } from "../SharedList/ListAndDropmeun";
export function useNavbarContent(isAuth: boolean) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLangToAr = useCallback(() => i18n.changeLanguage("ar"), [i18n]);
  const changeLangToEn = useCallback(() => i18n.changeLanguage("en"), [i18n]);

  const accountMenu = useMemo<Items[]>(
    () => [
      { label: t("Profile"), onClick: () => navigate("/profile") },
      {
        label: isAuth ? t("Logout") : t("Login"),
        onClick: () => {
          if (isAuth) navigate("/home");
          else navigate("/login");
        },
      },
    ],
    [isAuth, t, navigate]
  );

  const langMenu = useMemo<Items[]>(
    () => [
      { label: t("English"), onClick: changeLangToEn },
      { label: t("Arabic"), onClick: changeLangToAr },
    ],
    [t, changeLangToEn, changeLangToAr]
  );

  const leftDropMenu: DropMeminfo[] = useMemo(
    () => [
      {
        Trigger: "/icons8-language-50.png",
        Items: langMenu,
        colorBackground: "#ffffff",
      },
    ],
    [langMenu]
  );

  const rightDropMenu: DropMeminfo[] = useMemo(
    () => [
      {
        Trigger: "/icons8-account-48.png",
        Items: accountMenu,
        colorBackground: "#ffffff",
      },
    ],
    [accountMenu]
  );

  const memoLeftLinkBlock = useMemo(() => leftLinkBlock, []);
  const memoRightLinkBlock = useMemo(() => rightLinkBlock, []);

  return { leftDropMenu, rightDropMenu, memoLeftLinkBlock, memoRightLinkBlock };
}
