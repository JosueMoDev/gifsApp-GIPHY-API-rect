import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForm } from "../../store/auth";

export const SwitchAuthFormCompent = () => {
  const { isLogginFormActive } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onChangeForm = () => {
    dispatch(changeForm());
  };

  const styleRight = "min-w-[50%] w-[50%] h-12 rounded-full text-base  font-semibold text-gray-50  bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700 bg-indigo-500 text-white bg-indigo-500 text-white";

  const styleLeft = "min-w-[50%] w-[50%] h-12  rounded-full text-base font-semibold text-gray-50  bg-gradient-to-l from-teal-700 via-cyan-600 to-emerald-700 bg-emerald-500 text-white";
  return (
    <div className="flex bg-[#525252] rounded-full w-full my-3">
      <button
        className={
          isLogginFormActive
            ? `${styleRight} animate__animated animate__shakeX animate__headShake`
            : "text-gray-100 text-base px-3 w-[50%] text-center bg-transparent"
        }
        onClick={onChangeForm}
      >
        Log In
      </button>

      <button
        className={
          isLogginFormActive
            ? "text-gray-100 text-base px-3 w-[50%] text-center bg-transparent"
            : `${styleLeft} animate__animated animate__headShake`
        }
        onClick={onChangeForm}
      >
        Sign Up
      </button>
    </div>
  );
};
