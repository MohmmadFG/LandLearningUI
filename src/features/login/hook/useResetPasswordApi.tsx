import type { ResetPasswordModel } from "../models/ResetPasswordModel";
import axios from "axios";
import { useShowToast } from "@/shared/alarms/useShowToast";
import { RegisterSchema } from "@/features/Register/Validations/registerSchema";
import { useNavigate } from "react-router-dom";
export function useResetPasswordApi() {
  const nav = useNavigate();
  const { MakeToast, MakeToastFailure } = useShowToast();
  const RequestResetPass = async (email: string) => {
    try {
      const Request = await axios.post(
        "http://localhost:5055/v1/api/Password/reset-token",
        {},
        { params: { email } }
      );

      if (Request.data) MakeToast("We send to your email link of Re-set");
    } catch (err) {
      console.log(err);
      MakeToastFailure("Try again");
    }
  };

  const MakeNewPassword = async (ResetPassModel: ResetPasswordModel) => {
    const Validations = RegisterSchema.shape.Password;
    const isVaildPassword = await Validations.safeParseAsync(
      ResetPassModel.newpassword
    );
    if (isVaildPassword.success) {
      try {
        const NewPass = await axios.post(
          "http://localhost:5055/v1/api/Password/reset-token/verify",
          ResetPassModel
        );
        if (NewPass) {
          MakeToast("Success You Re-set your Password");
          nav("/home")
        }

        } catch (err) {
        console.log(err);
        MakeToastFailure("Try again");
      }
    } else {
      MakeToastFailure("Not valid Password again");
      return;
    }
  };

  return { RequestResetPass, MakeNewPassword };
}
