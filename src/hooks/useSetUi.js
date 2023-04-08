import { useDispatch, useSelector } from "react-redux";
import {
  onCopyLink,
  onShowAlert,
  onCloseAlert,
  onCloseSharingWindow,
  onShareItem,
  onOpenFlyMenu,
  onCloseFlyMenu,
  onClearItem,
  onClearCategories,
  onClearSearch,
  onOpenAutoComplete,
  onCloseAutoComplete,
  onCloseAuthAlert,
  onToggleSideNavAuth,
} from "/src/store";

export const useSetUi = () => {
  const dispatch = useDispatch();
  const {
    authAlertOpen,
    alertMessage,
    statusAlert,
    isLinkCopid,
    isAlertOpen,
    isSharingItem,
    isFlyMenuOpen,
    isAutoCompleteOpen,
  } = useSelector((state) => state.ui);

  const startCopyLink = () => {
    dispatch(onCopyLink());
  };
  const startShowingAlert = () => {
    dispatch(onShowAlert());
  };
  const startClosingAlert = () => {
    dispatch(onCloseAlert());
  };

  const toggleDrawer = () => {
    console.log("hola");
    dispatch(onToggleSideNavAuth());
  };

  const startClosingAuthAlert = () => {
    dispatch(onCloseAuthAlert());
  };

  const startSharingItem = () => {
    dispatch(onShareItem());
  };
  const startClosingShareWindow = () => {
    dispatch(onCloseSharingWindow());
  };
  const startOpenFlyMenu = () => {
    dispatch(onOpenFlyMenu());
  };
  const startCloseFlyMenu = () => {
    dispatch(onCloseFlyMenu());
  };
  const startClear = () => {
    dispatch(onClearSearch());
    dispatch(onClearItem());
    dispatch(onClearCategories());
  };
  const startOpenAutoComplete = () => {
    dispatch(onOpenAutoComplete());
  };
  const startCloseAutoComplete = () => {
    dispatch(onCloseAutoComplete());
  };

  // * hay que trabajer abrir y cerrar flyout menu aqui, hay que mostrar spinner cuando se
  // * se esta buscando y setando images, limpiar el search tearm cuando se hace click en home

  return {
    // * PROPERTIES
    authAlertOpen,
    alertMessage,
    statusAlert,
    isLinkCopid,
    isAlertOpen,
    isSharingItem,
    isFlyMenuOpen,
    isAutoCompleteOpen,

    // * METHODS
    startCopyLink,
    startShowingAlert,
    startClosingAlert,
    startClosingShareWindow,
    startSharingItem,
    startOpenFlyMenu,
    startCloseFlyMenu,
    startClear,
    startOpenAutoComplete,
    startCloseAutoComplete,
    startClosingAuthAlert,
    toggleDrawer,
  };
};
