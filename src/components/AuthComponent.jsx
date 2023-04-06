import React from "react";
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PersonIcon from "@mui/icons-material/Person";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { startGoogleSignIn, startLoginWithEmailandPassword, startFacebookSignIn } from '../store/auth'
export const AuthComponent = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const isAuthenticating = useMemo(() => status === 'checking', [status]); 
  const onGoogleSignIn = () => { 
    dispatch(startGoogleSignIn())
  } 
  const onFacebookSignIn = () => { 
    dispatch(startFacebookSignIn())
  } 
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className="w-40 h-fit  flex">
              <div className="bg-[#525252] w-fit h-fit rounded-sm p-1.5 flex justify-center align-middle">
                <PersonIcon className="text-white  roundered-md" />
              </div>
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleDrawer(anchor, true)}
                className="bg-[#3E3E3E] font-semibold pl-8 w-full text-center text-sm h-fit rounded-r-sm flex justify-items-center align-middle p-2 text-white px-6"
              >
                Log in
              </button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
              
            >
              <Box className="bg-purple-900/95  h-screen w-full" sx={{ width:'auto' }}>
                <div className="pt-5 w-full flex justify-center">
                    <img src="https://giphy.com/static/img/be-animated.gif" className="w-auto h-32"></img>
                </div>
                <div className="flex-auto w-[500px] p-10">
                  <form role="form text-left">
                    <div className="mb-4">
                      <input
                        type="email"
                        className="placeholder:text-gray-700 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="relative flex">
                        <input
                          //   type={{ type }}
                          className="placeholder:text-gray-700 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
                          placeholder="Passoword"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                          <button>
                            {/* <mat-icon>visibility_off</mat-icon> */}
                          </button>
                          <button>
                            {/* <mat-icon>visibility</mat-icon> */}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <button className="bg-gradient-to-l text-white font-semibold rounded-sm from-violet-700 via-violet-600 to-indigo-500 bg-indigo-500 w-full h-fit p-2 px-6">
                        Log in
                      </button>
                    </div>
                  </form>
                  <Divider className="bg-white/50"/>
                  <div className="w-full space-y-2 mt-5">
                    <button onClick={onGoogleSignIn} disabled={ isAuthenticating } className="bg-gradient-to-l flex justify-center align-middle rounded-sm text-white font-semibold bg-[#030407] w-full h-fit p-2 px-6">
                       <Google className="text-base mx-2"/>
                        Log in With Google
                    </button>
                    <button onClick={onFacebookSignIn} disabled={ isAuthenticating } className="bg-gradient-to-l flex justify-center align-middle rounded-sm text-white font-semibold bg-[#030407] w-full h-fit p-2 px-6">
                        <Facebook className="text-base mx-2"/>
                        Log in With Facebook
                    </button>
                  </div>
                </div>
              </Box>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
