// import { AuthAlertComponet } from "/src/auth/components/AuthAlertComponent";
import {
  // CopyAlertComponent,
  // InputSeachComponent,
  // NavBarComponent,
} from "/src/components";
import { AppRouter } from "/src/router/AppRouter";

export const GifApp = () => {
  return (
    <>
      {/* <CopyAlertComponent />
      <AuthAlertComponet /> */}
      <div className="px-2 lg:px-5 xl:px-24 w-12/12">
        {/* <NavBarComponent /> */}
        {/* <InputSeachComponent /> */}
        <AppRouter />
      </div>
    </>
  );
};
