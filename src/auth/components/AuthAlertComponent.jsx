import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useSetUi } from "/src/hooks";

export const AuthAlertComponet = () => {
  
  const { statusAlert, alertMessage, authAlertOpen, startClosingAuthAlert } = useSetUi();
  const alertColor = (statusAlert) ? '#34d399' : '#f43f5e';
  useEffect(() => {
    if (authAlertOpen) {
      setTimeout(() => {
        startClosingAuthAlert();
      }, 2000);
    }
  }, [authAlertOpen]);

  return (
    <Stack
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 10,
        top: 0,
        display: `${authAlertOpen ? "" : "none"}`,
      }}
    >
      <Alert
        variant="filled"
        icon={false}
        style={{
          backgroundColor:`${alertColor}`,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <p className="text-slate-800 font-semibold">
          {alertMessage}
        </p>
      </Alert>
    </Stack>
  );
};
