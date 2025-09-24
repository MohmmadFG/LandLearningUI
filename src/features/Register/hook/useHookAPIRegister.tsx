import { useState } from "react";
import type { RegisterModel } from "../models/RegisterModel";

import axios from "axios";

export function useApiRegister<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);

  const Registration = async (inputData: RegisterModel) => {
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

  return { Registration, error, loading, data };
}
