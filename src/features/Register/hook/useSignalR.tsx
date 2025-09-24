import { useEffect, useMemo, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";
import InfoAboutFleds from "@/shared/components/InfoAboutFields";
export function useSignalR(isValidUsername: boolean, currentUsername: string) {
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const [isAvailable, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (!connectionRef.current) {
      const newConnection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5055/chatHub", {
          withCredentials: true,
          transport: HttpTransportType.WebSockets,
        })
        .withAutomaticReconnect()
        .build();

      connectionRef.current = newConnection;

      newConnection
        .start()
        .then(() => console.log("SignalR Connected."))
        .catch((err) => console.error("SignalR Connection Error:", err));
    }
  }, []);

  const handleCheckUsername = async () => {
    if (
      connectionRef.current &&
      connectionRef.current.state === signalR.HubConnectionState.Connected
    ) {
      try {
        const result = await connectionRef.current.invoke(
          "CheckUsernameAvailability",
          currentUsername
        );
        if (result) setAvailable(true);
        if (!result) setAvailable(false);
        console.log("resukt:", result);
      } catch (err) {
        console.error("Invoke failed:", err);
      }
    }
  };
  const CheckButton = () => {
    if (!isValidUsername) {
      return (
        <button
          className="rounded-sm text-[white] bg-[#1C3548] h-[42px] w-[100%] hover:bg-[#020b12] hover:cursor-pointer "
          style={{
            fontFamily: "Reddit Sans Condensed",
          }}
          disabled={true}
        >
          Check
        </button>
      );
    }
    return (
      <button
        disabled={false}
        onClick={async () => {
          const result = await handleCheckUsername();
          if (result != null) {
            setAvailable(result);
          }
        }}
        className="rounded-sm text-[white] bg-[#1C3548] h-[42px] w-[100%] hover:bg-[#020b12] hover:cursor-pointer "
        style={{
          fontFamily: "Reddit Sans Condensed",
        }}
      >
        Check
      </button>
    );
  };

  const Info = useMemo(() => {
    if (!isValidUsername) {
      return (
        <InfoAboutFleds
          label="Enter a valid username first"
          srcIcon="/icons8-info.svg"
          color="gray"
        />
      );
    } else if (isAvailable === null) {
      return (
        <InfoAboutFleds
          label="Click Check to see if username is available or not"
          srcIcon="/icons8-info.svg"
          color="gray"
        />
      );
    } else if (isAvailable) {
      return (
        <InfoAboutFleds
          label="Username is Available"
          srcIcon="/icons8-info.svg"
          color="green"
        />
      );
    } else {
      return (
        <InfoAboutFleds
          label="Username is not Available"
          srcIcon="/icons8-info.svg"
          color="red"
        />
      );
    }
  }, [isAvailable, isValidUsername]);
  return { CheckButton, Info };
}
