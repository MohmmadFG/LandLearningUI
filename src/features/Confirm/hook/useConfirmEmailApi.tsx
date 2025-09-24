import { useState, useEffect } from "react";
import type { ConfirmEmailModel } from "../model/ConfirmEmailModel";
import axios from "axios";

export function useConfirmApi(confirmModel: ConfirmEmailModel) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<boolean>(false);

  useEffect(() => {
    const fetchConfirmation = async () => {
      setLoading(true);

      try {
        const VerifyingEmail = await axios.post(
          "http://localhost:5055/v1/api/Confirm/email/verifying",
          confirmModel
        );
        if (VerifyingEmail.data && VerifyingEmail.status == 200) {
          console.log("Resonse in clent:", VerifyingEmail.data);
          setLoading(false);
          setResponse(VerifyingEmail.data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown Error");
        }
      }
    };

    fetchConfirmation();
  }, []);

  return { loading, error, response };
}
