import { useCallback } from "react";
import { toast } from "react-toastify";

export function useShowToast() {
  const MakeToast = useCallback((message: string) => {
    const id = toast.success(message, {
      style: {
        color: "white",
        background: "#1C3548",
        fontWeight: "bold",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "6px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        cursor: "default",
      },
      position: "top-right",
    });

    const handleClickOutside = () => {
      toast.dismiss(id);
      document.removeEventListener("click", handleClickOutside);
    };

    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  }, []);

  const MakeToastFailure = useCallback((message: string) => {
    const id = toast.error(message, {
      style: {
        color: "white",
        background: "#1C3548",
        fontWeight: "bold",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "6px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        cursor: "default",
      },
      position: "top-right",
    });

    const handleClickOutside = () => {
      toast.dismiss(id);
      document.removeEventListener("click", handleClickOutside);
    };

    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  }, []);

  return { MakeToast, MakeToastFailure };
}
