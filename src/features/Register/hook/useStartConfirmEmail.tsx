import { useShowToast } from "../../../shared/alarms/useShowToast";
import axios from "axios";

export function useStartConfirmEmail(url: string) {
  const { MakeToast } = useShowToast();

  const GenEmailConfirm = async () => {
    try {
      const EmailToConfirm = await axios.get(url);
      if (EmailToConfirm.data) {
        MakeToast("We sent a confirmation link to your email.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { GenEmailConfirm };
}
