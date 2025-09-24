import TopBar from "@/shared/components/TopBar";
import InputTextField from "@/shared/components/InputTextField.tsx";
import InfoAboutFields from "@/shared/components/InfoAboutFields";
import { useTranslation } from "react-i18next";
import ContainerWithAnimatedAndStyle from "@/shared/components/ContainerWithAnimatedAndStyle";
import { Header } from "@/features/login/components/HeaderTitle.tsx";
import ButtonComponent from "@/shared/components/ButtonComponent";
import { RegisterSchema } from "../Validations/registerSchema.ts";
import type { RegisterFormInputs } from "../Validations/registerSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { RegisterModel } from "@/features/Register/models/RegisterModel";
import { useApiRegister } from "../hook/useHookAPIRegister";
import { useNavbarContent } from "@/shared/hook/useNavbarContent";
import { useCallback } from "react";
import { useSignalR } from "../hook/useSignalR";
import { useShowToast } from "../../../shared/alarms/useShowToast.tsx";
import { useStartConfirmEmail } from "../hook/useStartConfirmEmail.tsx";
export default function RegisterPage() {
  const { MakeToast } = useShowToast();
  const { memoLeftLinkBlock, memoRightLinkBlock, leftDropMenu, rightDropMenu } =
    useNavbarContent(false);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, dirtyFields },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });
  const isValidUsername = (username: string) => {
    try {
      RegisterSchema.shape.UserName.parse(username);
      return true;
    } catch {
      return false;
    }
  };

  const { t } = useTranslation();
  const { Registration } = useApiRegister(
    "http://localhost:5055/v1/api/Account/register"
  );
  const CurrentEmail = watch("Email");
  const { GenEmailConfirm } = useStartConfirmEmail(
    `http://localhost:5055/v1/api/Confirm/email/confirmations/${CurrentEmail}`
  );
  const CurrentUsername = watch("UserName");
  const { CheckButton, Info } = useSignalR(
    isValidUsername(CurrentUsername),
    CurrentUsername
  );

  const onSubmit = useCallback(
    async (formData: RegisterModel) => {
      console.log(formData);
      try {
        const result = await Registration({
          UserName: formData.UserName,
          Email: formData.Email,
          Password: formData.Password,
        });
        console.log("Registration success:", result);
        if (result == "USER_ADD") {
          MakeToast("Registration success");
          GenEmailConfirm();
        }
      } catch (err) {
        console.error("Registration failed:", err);
      }
    },
    [Registration]
  );
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
      <ContainerWithAnimatedAndStyle
        customWidth="514px"
        customHeight="548px"
        top="14px"
      >
        <Header>{t("Register")}</Header>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <div className="flex flex-row items-end  ">
              <InputTextField
                key={1}
                height="42px"
                labelText="Username"
                type="text"
                width="88%"
                {...register("UserName")}
              ></InputTextField>
              <CheckButton></CheckButton>
            </div>
            <div className="flex flex-col gap-[0px]">
              <InfoAboutFields
                key={2}
                label="username"
                srcIcon="/icons8-info.svg"
                color={
                  errors.UserName
                    ? "red"
                    : dirtyFields.UserName
                    ? "green"
                    : "#4a4a4a"
                }
              ></InfoAboutFields>
              {Info}
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <InputTextField
              height="42px"
              labelText="Email"
              type="email"
              {...register("Email")}
            ></InputTextField>
            <InfoAboutFields
              key={3}
              label="email"
              srcIcon="/icons8-info.svg"
              color={
                errors.Email ? "red" : dirtyFields.Email ? "green" : "#4a4a4a"
              }
            ></InfoAboutFields>
          </div>

          <div className="flex flex-col gap-[4px]">
            <InputTextField
              height="42px"
              labelText="Password"
              type="password"
              {...register("Password")}
            ></InputTextField>
            <InfoAboutFields
              srcIcon="/icons8-info.svg"
              label="password"
              color={
                errors.Password
                  ? "red"
                  : dirtyFields.Password
                  ? "green"
                  : "#4a4a4a"
              }
            ></InfoAboutFields>
          </div>
        </div>
        <ButtonComponent
          customTop="24px"
          labelName="Create"
          onClick={handleSubmit(onSubmit)}
        ></ButtonComponent>
      </ContainerWithAnimatedAndStyle>
    </div>
  );
}
