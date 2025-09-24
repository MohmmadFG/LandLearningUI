import { useState } from "react";
import type { LoginModel } from "../models/LoginModel";
import axios from "axios";

export function useLoginApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginError, setError] = useState<null | unknown>(null);

  const login = async (inputData: LoginModel) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, inputData);
      if (response.status !== 200)
        throw new Error(`Request failed with status: ${response.status}`);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loginError, loading, data };
}
