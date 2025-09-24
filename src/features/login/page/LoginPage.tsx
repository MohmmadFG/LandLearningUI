import ContainerWithAnimatedAndStyle from "../../../shared/components/ContainerWithAnimatedAndStyle";
import { Header } from "../components/HeaderTitle";
import InputTextField from "../../../shared/components/InputTextField";
import ButtonComponent from "../../../shared/components/ButtonComponent";

import GoogleLogin from "../components/GoogleLogin";
import ResetPassword from "../components/ResetPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormInputs } from "../Validations/loginSchema";
import { loginSchema } from "../Validations/loginSchema";
import TopBar from "../../../shared/components/TopBar";
import { useNavbarContent } from "../../../shared/hook/useNavbarContent";
import React, { useCallback } from "react";
import { useLoginApi } from "../hook/useLoginApi";
import type { LoginModel } from "../models/LoginModel";
import { t } from "i18next";
import { useResetPasswordApi } from "../hook/useResetPasswordApi";
const WrongForm = React.lazy(() => import("../../../shared/components/Wrong"));
import { useShowToast } from "@/shared/alarms/useShowToast";
export default function LoginPage() {
  const { MakeToastFailure } = useShowToast();
  const { RequestResetPass } = useResetPasswordApi();
  const { memoLeftLinkBlock, memoRightLinkBlock, leftDropMenu, rightDropMenu } =
    useNavbarContent(false);
  const { login } = useLoginApi("http://localhost:5141/api/Auth/login");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const CureentEmail = watch("email") ?? "";

  const onSubmit = useCallback(
    async (formData: LoginModel) => {
      console.log(formData);
      try {
        const result = await login({
          email: formData.email,
          password: formData.password,
        });
        console.log("Login success:", result);
      } catch (err) {
        console.error("Login failed:", err);
      }
    },
    [login]
  );
  const ResetPasswordStart = useCallback(() => {
    if (!errors.email && CureentEmail.length > 0) {
      RequestResetPass(CureentEmail);
    } else {
      MakeToastFailure("Enter your email in Field");
    }
  }, [errors, CureentEmail]);

  return (
    <div
      className="flex flex-col items-center justify-flex-start"
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        backgroundImage: "url('/back.png')",
      }}
    >
      <TopBar
        variantBackground="secondary"
        boxShadowMode={"secondary"}
        colorLogo="white"
        leftItemLink={memoLeftLinkBlock}
        leftItemDropMenu={leftDropMenu}
        rightItemLink={memoRightLinkBlock}
        rightItemDropMenu={rightDropMenu}
      ></TopBar>
      <ContainerWithAnimatedAndStyle>
        <Header>{t("Login")}</Header>
        <div className="flex flex-col gap-[8px]">
          <InputTextField
            labelText={"Email"}
            {...register("email")}
            width="337px"
            type="text"
          ></InputTextField>
          <InputTextField
            labelText={"Password"}
            {...register("password")}
            width="337px"
            type="password"
            fontSize="22px"
          ></InputTextField>
          <GoogleLogin width="337px" onClick={() => {}} />
        </div>

        <ResetPassword
          onClick={() => {
            console.log("Curremt email:" + CureentEmail);
            ResetPasswordStart();
          }}
        />

        {Object.keys(errors).length > 0 && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <WrongForm Message={t("ErrorInvalidLogin")}></WrongForm>
          </React.Suspense>
        )}

        <ButtonComponent
          labelName="Submit"
          onClick={handleSubmit(onSubmit, (err) => {
            console.log(err);
          })}
        />
      </ContainerWithAnimatedAndStyle>
    </div>
  );
}
