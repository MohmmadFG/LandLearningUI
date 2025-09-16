import type { LoginAPIInterface } from "./LoginAPIInterface";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export function useApiLogin<T>(url: string, inputdata: LoginAPIInterface) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoadin] = useState<boolean>(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    let isInPage = true;

    const Fetchdata = async () => {
      setLoadin(true);
      try {
        const response = await axios.post(url, inputdata);
        if (response.status != 200)
          throw Error(`the state of Request is:${response.status}`);
        if (isInPage) setData(response.data);
      } catch (err) {
        if (isInPage) setError(err);
      } finally {
        if (isInPage) setLoadin(false);
      }
    };
    Fetchdata();
    return () => {
      isInPage = false;
    };
  }, [url, JSON.stringify(inputdata)]);

  return { data, loading, error };
}
