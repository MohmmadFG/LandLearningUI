import { styled } from "@/shared/styles/stitches.config";
import ReactPlayer from "react-player";
import ContainerWithAnimatedAndStyle from "@/shared/components/ContainerWithAnimatedAndStyle";
import InfoAboutFields from "@/shared/components/InfoAboutFields";
import InputTextField from "@/shared/components/InputTextField";
import ButtonComponent from "@/shared/components/ButtonComponent";
import { useResetPasswordApi } from "../hook/useResetPasswordApi";
import { useSearchParams } from "react-router-dom";

import {
  RegisterSchema,
  type RegisterFormInputs,
} from "@/features/Register/Validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const PageWrapper = styled("div", {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BackgroundVideo = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  "& video": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});

export default function ResetPasswordPage() {
  const { MakeNewPassword } = useResetPasswordApi();
  const [searchParams] = useSearchParams();
  const userid = searchParams.get("userid");
  const token = searchParams.get("token");

  const {
    register,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });
  const password = watch("Password");
  return (
    <PageWrapper>
      <BackgroundVideo>
        <ReactPlayer
          src="/142815-780943566_small.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </BackgroundVideo>
      <ContainerWithAnimatedAndStyle
        top="0px"
        customWidth="414px"
        customHeight="250px"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <InputTextField
            labelText="New Password"
            type="Password"
            {...register("Password")}
          ></InputTextField>
          <InfoAboutFields
            label="password"
            srcIcon="/icons8-info.svg"
            color={
              errors.Password
                ? "red"
                : dirtyFields.Password
                ? "green"
                : "#4a4a4a"
            }
          ></InfoAboutFields>
          <ButtonComponent
            labelName="Submit"
            customTop="30px"
            onClick={() => {
              MakeNewPassword({
                newpassword: password,
                userid: userid!,
                token: token!,
              });
            }}
          ></ButtonComponent>
        </div>
      </ContainerWithAnimatedAndStyle>
    </PageWrapper>
  );
}
