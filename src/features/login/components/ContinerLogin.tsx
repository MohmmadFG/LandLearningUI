import "../login.css";
import ContinerWithAnimatedAndStyle from "../../../shared/components/ContinerWithAnimated";
import { HaderContiner } from "../ElementsContner";
import InputTextFilds from "../../../shared/components/InputFildes";
import ButtonComponet from "../../../shared/components/Button";
import GoogleLogIn from "../GoogleLoing";
import ResetPassword from "../ResetPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormInputs } from "../validationInpu";
import { loginSchema } from "../validationInpu";
import { SendLoginData } from "../ApiService";
import TopBar from "../../../shared/components/TopBar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type {
  DropMenusinfo,
  Items,
} from "@/shared/TypesInterface/DropMenusinfo";
import { useCallback, useMemo } from "react";
import { leftLinklBlock } from "../../../shared/ShraredList/ListloginRegister";
import { RghtLinklBlock } from "../../../shared/ShraredList/ListloginRegister";
import React from "react";
const WrongForm = React.lazy(() => import("../../../shared/components/Wrong"));
export default function ContinerLogin() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const memoizedFnLangToArab = useCallback(() => {
    i18n.changeLanguage("ar");
  }, [i18n]);

  const memoizedFnLangToEn = useCallback(() => {
    i18n.changeLanguage("en");
  }, [i18n]);
  const ResetPasswordPage = useCallback(() => {
    navigate("/passs");
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const Submit = useCallback(
    async (data: { email: string; password: string }) => {
      console.log("DASD:", data);
      const DataComing = await SendLoginData(
        "http://localhost:5141/api/Auth/login",
        data
      );
      console.log("Response 222:", DataComing);
    },
    []
  );
  const isAunt = false;

  const memoDropMenuItemsAccount = useMemo(() => {
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
    return DropMenuItemsAccount;
  }, [isAunt, t, navigate]);

  const memoDropMenuLang = useMemo(() => {
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
    return DropMenuLang;
  }, [memoizedFnLangToEn, memoizedFnLangToArab, t]);

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
        <ContinerWithAnimatedAndStyle>
          <HaderContiner>{t("Login")}</HaderContiner>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <InputTextFilds
              labelName={"Email"}
              {...register("email")}
              widthDev="337px"
              type="text"
            ></InputTextFilds>
            <InputTextFilds
              labelName={"Password"}
              {...register("password")}
              widthDev="337px"
              type="password"
              fontSize="22px"
            ></InputTextFilds>
            <GoogleLogIn widthDev="337px" onClick={() => {}} />
          </div>

          <ResetPassword onClick={ResetPasswordPage} />

          {Object.keys(errors).length > 0 && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <WrongForm Message={t("ErrorInvalidLogin")}></WrongForm>
            </React.Suspense>
          )}

          <ButtonComponet
            labelname="Submit"
            onClick={handleSubmit(Submit, (err) => {
              console.log(err);
            })}
          />
        </ContinerWithAnimatedAndStyle>
      </div>
    </>
  );
}
