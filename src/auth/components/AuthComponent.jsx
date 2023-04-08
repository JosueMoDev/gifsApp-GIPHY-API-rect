import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PersonIcon from "@mui/icons-material/Person";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { startGoogleSignIn, startFacebookSignIn } from "/src/store/auth";
import {
  LogInFormCompenent,
  MenuAccountNoAuthenticatedComponent,
  SignUpFormCompenent,
  SwitchAuthFormCompent,
} from "../components";
import { useSetUi } from "/src/hooks";

export const AuthComponent = () => {
  const { isLogginFormActive, status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };
  const onFacebookSignIn = () => {
    dispatch(startFacebookSignIn());
  };
  const { isDrawerAuthOpen } = useSelector((state) => state.ui);
  const { toggleDrawer } = useSetUi();

  const someGifsInLocalStorage = JSON.parse(
    localStorage.getItem("allFavorites")
  );

  return (
    <div>
      <div>
        <>
          {someGifsInLocalStorage?.length ? (
            <MenuAccountNoAuthenticatedComponent />
          ) : (
            <div className="w-40 h-fit  flex">
              <div className="bg-[#525252] w-fit h-fit rounded-sm p-1.5 flex justify-center align-middle">
                <PersonIcon className="text-white  roundered-md" />
              </div>
              <button
                id="basic-button"
                aria-controls={isDrawerAuthOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isDrawerAuthOpen ? "true" : undefined}
                onClick={() => toggleDrawer()}
                className="bg-[#3E3E3E] font-semibold pl-8 w-full text-center text-sm h-fit rounded-r-sm flex justify-items-center align-middle p-2 text-white px-6"
              >
                Log in
              </button>
            </div>
          )}

          <SwipeableDrawer
            anchor="left"
            open={isDrawerAuthOpen}
            onClose={() => toggleDrawer()}
            onOpen={() => toggleDrawer()}
          >
            <Box
              className="bg-purple-900/95  h-full w-full"
              sx={{ width: "auto" }}
            >
              <div className="pt-5 w-full flex justify-center">
                <img
                  src="https://giphy.com/static/img/be-animated.gif"
                  className="w-auto h-32"
                ></img>
              </div>
              <div className="flex-auto h-auto w-[400px] p-10 bg-purple-900/95">
                <SwitchAuthFormCompent />
                {isLogginFormActive ? (
                  <LogInFormCompenent />
                ) : (
                  <SignUpFormCompenent />
                )}
                <Divider className="bg-white/50" />
                <div className="w-full space-y-2 mt-5">
                  <button
                    onClick={onGoogleSignIn}
                    disabled={isAuthenticating}
                    className="bg-gradient-to-l flex justify-center align-middle rounded-sm text-white font-semibold bg-[#030407] w-full h-fit p-2 px-6"
                  >
                    <Google className="text-base mx-2" />
                    Log in With Google
                  </button>
                  <button
                    onClick={onFacebookSignIn}
                    disabled={isAuthenticating}
                    className="bg-gradient-to-l flex justify-center align-middle rounded-sm text-white font-semibold bg-[#030407] w-full h-fit p-2 px-6"
                  >
                    <Facebook className="text-base mx-2" />
                    Log in With Facebook
                  </button>
                </div>
              </div>
            </Box>
          </SwipeableDrawer>
        </>
      </div>
    </div>
  );
};
