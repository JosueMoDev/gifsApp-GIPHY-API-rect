import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  singInWithGoogle,
  signInWithFacebook,
} from "/src/firebase/providers";
import {
  checkingCrendentials,
  login,
  logout,
} from "/src/store/auth/auth-slice";
import { onShowAuthAlert, onToggleSideNavAuth } from "/src/store/ui/ui-slice";
import { onCleanFavorites } from "/src/store/favorites/favorite-slice";
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCrendentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCrendentials());
    dispatch(onToggleSideNavAuth());
    const result = await singInWithGoogle();
    if (!result) {
      dispatch(logout({ errorMessage }));
      dispatch(
        onShowAuthAlert({
          alertMessage: "Incorrect authentication credentials.",
          statusAlert: false,
        })
      );
      return;
    }
    dispatch(
      login(result),
      onShowAuthAlert({
        alertMessage: "You are now logged in",
        statusAlert: true,
      })
    );
  };
};
export const startFacebookSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCrendentials());
    dispatch(onToggleSideNavAuth());
    const result = await signInWithFacebook();
    if (!result) {
      dispatch(logout({ errorMessage }));
      dispatch(
        onShowAuthAlert({
          alertMessage: "Incorrect authentication credentials.",
          statusAlert: false,
        })
      );
      return;
    }
    dispatch(login(result));
    dispatch(
      onShowAuthAlert({
        alertMessage: "You are now logged in",
        statusAlert: true,
      })
    );
  };
};

export const startCreateUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCrendentials());
    dispatch(onToggleSideNavAuth());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailAndPassword({ email, password, displayName });
    if (!ok) {
      dispatch(logout({ errorMessage }));
      dispatch(
        onShowAuthAlert({
          alertMessage: "Incorrect authentication credentials.",
          statusAlert: false,
        })
      );
      return;
    }
    dispatch(login({ uid, displayName, email, photoURL }));
    dispatch(
      onShowAuthAlert({
        alertMessage: "You are now logged in",
        statusAlert: true,
      })
    );
  };
};

export const startLoginWithEmailandPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCrendentials());
    dispatch(onToggleSideNavAuth());
    const { ok, uid, photoURL, displayName, errorMessage } =
      await loginWithEmailAndPassword({ email, password });
    if (!ok) {
      dispatch(logout({ errorMessage }));
      dispatch(
        onShowAuthAlert({
          alertMessage: "Incorrect authentication credentials.",
          statusAlert: false,
        })
      );
      return;
    }
    dispatch(login({ uid, displayName, email, photoURL }));
    dispatch(
      onShowAuthAlert({
        alertMessage: "You are now logged in",
        statusAlert: true,
      })
    );
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
    dispatch(
      onShowAuthAlert({
        alertMessage: "You are now logged out",
        statusAlert: true,
      })
    );
    dispatch(onCleanFavorites());
  };
};
