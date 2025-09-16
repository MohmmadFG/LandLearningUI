import "../login.css";
import ContinerWithAnimatedAndStyle from "../ContinerWithAnimated";
import { HaderContiner } from "../ElementsContner";
import InputTextFilds from "../../../shared/components/InputFildes";
import ButtonComponet from "../../../shared/components/Button";
import GoogleLogIn from "../GoogleLoing";
import ResetPassword from "../ResetPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormInputs } from "../validationInpu";
import { loginSchema } from "../validationInpu";
import WrongForm from "../../../shared/components/Wrong";
import { SendLoginData } from "../ApiService";
import TopBar from "../../../shared/components/TopBar";
import ContinerNavtobar from "../../../shared/components/ContinerLinkeTopBar";
import LinkIconWithLableOrWithOut from "../../../shared/components/LinkIconWithLableOrWithOut";
import Dropmun from "../../../shared/components/DropMeunu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { TypeDropMenuItem } from "@/shared/TypesInterface/TypeDropMenuItem";
import { useCallback } from "react";
export default function ContinerLogin() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const memoizedFnLangToArab = useCallback(() => {
    i18n.changeLanguage("ar");
  }, [i18n.language]);

  const memoizedFnLangToEn = useCallback(() => {
    i18n.changeLanguage("en");
  }, [i18n.language]);
  const UrlResetPassword = "/passwordChange";
  const ResetPasswordPage = useCallback(() => {
    navigate(UrlResetPassword);
  }, [UrlResetPassword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const isAunt = true;
  const DropMenuItemsAccount: TypeDropMenuItem[] = [
    { label: t("Profile"), onClick: () => navigate("/profile") },
    {
      label: isAunt ? t("Logout") : t("Login"),
      onClick: () => {
        if (isAunt) navigate("/home");
        else navigate("/login");
      },
    },
  ];

  const DropMenuLang: TypeDropMenuItem[] = [
    {
      label: t("English"),
      onClick: memoizedFnLangToEn,
    },
    {
      label: t("Arabic"),
      onClick: memoizedFnLangToArab,
    },
  ];

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
        >
          <ContinerNavtobar>
            <LinkIconWithLableOrWithOut
              colorlabel="FontWhite"
              withLabel={true}
              nameLabel="Suggestions"
              Pageurl="/Suggestions"
              urlIcon="/icons8-communication-48.png"
            />
            <LinkIconWithLableOrWithOut
              colorlabel="FontWhite"
              withLabel={true}
              nameLabel="Support"
              Pageurl="/Support"
              urlIcon="/icons8-support-60.png"
            />
            <LinkIconWithLableOrWithOut
              colorlabel="FontWhite"
              withLabel={true}
              nameLabel="Subscription"
              Pageurl="/Subscription"
              urlIcon="/icons8-arrow-24.png"
            />
            <Dropmun
              Trigger={"/icons8-language-50.png"}
              Items={DropMenuLang}
              colorBackgorund={"#ffffff"}
            ></Dropmun>
          </ContinerNavtobar>
          <ContinerNavtobar>
            <LinkIconWithLableOrWithOut
              colorlabel="FontWhite"
              withLabel={false}
              urlIcon="/icons8-settings-5.png"
              Pageurl="/setting"
            />
            <Dropmun
              Trigger={"/icons8-account-48.png"}
              Items={DropMenuItemsAccount}
              colorBackgorund={"#ffffff"}
            ></Dropmun>

            <LinkIconWithLableOrWithOut
              colorlabel="FontWhite"
              withLabel={false}
              urlIcon="/icons8-notification-64.png"
            />
          </ContinerNavtobar>
        </TopBar>
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
              data-testid="InpuEmail"
              labelName={"Email"}
              {...register("email")}
              widthDev="337px"
              type="text"
            ></InputTextFilds>
            <InputTextFilds
              data-testid="Inpupassword"
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
            <WrongForm Message="Email or Password not valid" />
          )}
          <ButtonComponet
            data-testid="btnsadsa"
            labelname="Submit"
            onClick={handleSubmit(async (data) => {
              const DataComing = await SendLoginData(
                "http://localhost:5141/api/Auth/login",
                data
              );
              console.log("Response:", DataComing);
            })}
          />
        </ContinerWithAnimatedAndStyle>
      </div>
    </>
  );
}
