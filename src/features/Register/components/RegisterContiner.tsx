import TopBar from "@/shared/components/TopBar";
import InputTextFilds from "@/shared/components/InputFildes";
import "../Sample.css";
import type {
  DropMenusinfo,
  Items,
} from "@/shared/TypesInterface/DropMenusinfo";
import InfoAboutFleds from "@/shared/components/Infoaboutfiled";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { leftLinklBlock } from "../../../shared/ShraredList/ListloginRegister";
import { RghtLinklBlock } from "../../../shared/ShraredList/ListloginRegister";
import ContinerWithAnimatedAndStyle from "@/shared/components/ContinerWithAnimated";
import { HaderContiner } from "@/features/login/ElementsContner";
import ButtonComponet from "@/shared/components/Button";
export default function RegisterContiner() {
  console.log("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const memoizedFnLangToArab = useCallback(() => {
    i18n.changeLanguage("ar");
  }, [i18n]);

  const memoizedFnLangToEn = useCallback(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  const isAunt = false;
  const DropMenuItemsAccount: Items[] = [
    {
      label: t("Profile"),
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      label: isAunt ? t("Logout") : t("Login"),
      onClick: () => {
        if (isAunt) navigate("/home");
        else navigate("/login");
      },
    },
  ];
  const memoDropMenuItemsAccount = useMemo(
    () => DropMenuItemsAccount,
    [isAunt]
  );

  const DropMenuLang: Items[] = [
    {
      label: t("English"),
      onClick: memoizedFnLangToEn,
    },
    {
      label: t("Arabic"),
      onClick: memoizedFnLangToArab,
    },
  ];
  const memoDropMenuLang = useMemo(
    () => DropMenuLang,
    [memoizedFnLangToEn, memoizedFnLangToArab]
  );

  const leftDropmeu: DropMenusinfo[] = [
    {
      Trigger: "/icons8-language-50.png",
      Items: memoDropMenuLang,
      colorBackgorund: "#ffffff",
    },
  ];

  const RightDropmeu: DropMenusinfo[] = [
    {
      Trigger: "/icons8-account-48.png",
      Items: memoDropMenuItemsAccount,
      colorBackgorund: "#ffffff",
    },
  ];

  const memoLeftLinklBlock = useMemo(() => leftLinklBlock, []);
  const memoLeftDropmenu = useMemo(() => leftDropmeu, []);
  const memoRightLinklBlock = useMemo(() => RghtLinklBlock, []);
  const memoRightDropmenu = useMemo(() => RightDropmeu, [isAunt]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TopBar
          variantBackgroun="secondary"
          boxShdowmode={"secondary"}
          colorLogo="white"
          leftiteamLink={memoLeftLinklBlock}
          leftiteamDropmenu={memoLeftDropmenu}
          RightiteamLink={memoRightLinklBlock}
          RightiteamDropmena={memoRightDropmenu}
        ></TopBar>
        <ContinerWithAnimatedAndStyle spibwith="514px" Highcustom="524px">
          <HaderContiner>{t("Register")}</HaderContiner>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <InputTextFilds labelName="Username" type="text"></InputTextFilds>
              <InfoAboutFleds
                label="username"
                srcIcon="/icons8-info.svg"
              ></InfoAboutFleds>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <InputTextFilds labelName="Email" type="email"></InputTextFilds>
              <InfoAboutFleds
                label="email"
                srcIcon="/icons8-info.svg"
              ></InfoAboutFleds>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <InputTextFilds
                labelName="Password"
                type="password"
              ></InputTextFilds>
              <InfoAboutFleds
                srcIcon="/icons8-info.svg"
                label="password"
              ></InfoAboutFleds>
            </div>
          </div>
          <ButtonComponet cutsomtop="24px" labelname="Create"></ButtonComponet>
        </ContinerWithAnimatedAndStyle>
      </div>
    </>
  );
}
