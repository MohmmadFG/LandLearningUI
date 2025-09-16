import type { LoginAPIInterface } from "./LoginAPIInterface";
import axios from "axios";
export async function SendLoginData(
  url: string,
  data: LoginAPIInterface
): Promise<string> {
  const ResponseApi = await axios.post(url, data, {
    withCredentials: true,
  });
  return ResponseApi.data;
}

export function LoginWithGoogle(Url: string) {
  axios.post(Url);
}
