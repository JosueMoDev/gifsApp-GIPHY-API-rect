import { useNavigate } from "react-router-dom";
import {
  useGetResposeBySearchTerm,
  useGetTrendingResponse,
  useSetUi,
} from "../hooks";

import { FlyButtonToggleComponent, FlyMenuMobileComponent } from "./";
import { AccountComponent } from "../auth/AccountComponent";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { pink } from "@mui/material/colors";

export const NavBarComponent = () => {
  const { startCleaningSearch } = useGetResposeBySearchTerm();
  const { startCleanigHome } = useGetTrendingResponse();
  const { isFlyMenuOpen, startOpenFlyMenu, startCloseFlyMenu, startClear } =
    useSetUi();
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-none">
        <div className="px-2 mx-auto max-w-7xl" />
        <div className="relative flex items-center justify-between h-16 align-middle">
          <div className="flex items-center justify-start flex-1 align-middle sm:items-stretch sm:justify-start ">
            <div className="flex items-center flex-shrink-0 text-white font-mono">
              <a
                className="cursor-pointer no-underline text-white flex"
                onClick={() => {
                  startCleanigHome();
                  navigate("/");
                }}
              >
                <img
                  className="block w-auto sm:h-7 h-5  lg:hidden"
                  src="/logo.svg"
                  alt="logo"
                />
                <span className="ml-0 font-black sm:text-3xl  text-xl block lg:hidden">
                  GIPHY
                </span>
              </a>
              <a
                className="cursor-pointer no-underline text-white flex"
                onClick={() => {
                  startCleanigHome();
                  navigate("/");
                }}
              >
                <img
                  className="hidden  w-auto h-8 lg:block"
                  src="/logo.svg"
                  alt="logo"
                />
                <span className="ml-0 font-black text-3xl hidden lg:block">
                  GIPHY
                </span>
              </a>
            </div>
            <div className="flex space-x-4 py-7 pb-2 h-fit justify-items-end align-bottom">
              <div className="hidden  md:ml-6 md:flex xl:space-x-2 lg:space-x-4 space-x-2 lg:text-sm text-gray-700 font-mono text-sm ">
                <div className="w-max ">
                  <a
                    href="#"
                    className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l  from-cyan-600 via-sky-500 to-sky-600"
                    aria-current="page"
                  >
                    Reactions
                  </a>
                  <p className="bg-gradient-to-l from-teal-300 via-blue-300 to-cyan-400 h-1"></p>
                </div>
                <div className="w-max">
                  <a
                    href="#"
                    className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600"
                  >
                    Entretaiment
                  </a>
                  <p className="bg-gradient-to-l from-teal-400 via-blue-400 to-cyan-500 h-1"></p>
                </div>
                <div className="w-max">
                  <a
                    href="#"
                    className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600"
                  >
                    Sports
                  </a>
                  <p className="bg-gradient-to-l from-teal-500 via-blue-500 to-cyan-600 h-1"></p>
                </div>
                <div className="w-max">
                  <a
                    href="#"
                    className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600"
                  >
                    Stickers
                  </a>
                  <p className="bg-gradient-to-l  from-teal-500 via-blue-500 to-cyan-600 h-1"></p>
                </div>
                <div className="w-max">
                  <a
                    href="#"
                    className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600"
                  >
                    Artists
                  </a>
                  <p className="bg-gradient-to-l from-teal-600 via-blue-600 to-cyan-700 h-1"></p>
                </div>
                <div className="w-max">
                  <FlyButtonToggleComponent />
                </div>
              </div>
            </div>
            <div className="w-max px-4 py-5 pb-2 h-fit justify-items-end align-bottom">
              <AccountComponent />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end space-x-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
            <div className="flex items-center justify-end space-x-1 md:hidden">
              <IconButton
                onClick={() => {
                  startCleaningSearch();
                  navigate("/favorites");
                }}
              >
                <FavoriteIcon sx={{ fontSize: 24, color: pink[400] }} />
              </IconButton>
              {isFlyMenuOpen ? (
                <IconButton
                  onClick={() => {
                    startCloseFlyMenu();
                  }}
                >
                  <CloseIcon sx={{ fontSize: 24, color: "white" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    startOpenFlyMenu();
                  }}
                >
                  <MenuIcon sx={{ fontSize: 24, color: "white" }} />
                </IconButton>
              )}
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-l md:hidden from-violet-500 via-fuchsia-500 to-fuchsia-500  ${
            isFlyMenuOpen ? "" : "hidden"
          }`}
        >
          <div className=" h-full relative top-0 z-20 ">
            <div className="  block self-stretch">
              <div className="absolute inset-x-0 top-full text-sm text-white">
                <div className="relative p-4 bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
                  <div className="max-w-fit">
                    <div className="grid  gap-y-1  py-8">
                      <FlyMenuMobileComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
