import React from "react";
import { LoginModalComponent, MenuAccountComponent } from "./";
export const AccountComponent = () => {
  const isLogged = false;
  return <>{isLogged ? <MenuAccountComponent /> : <LoginModalComponent />}</>;
};
