import React from "react";
import { useForm } from "react-hook-form";
import { startCreateUserWithEmailAndPassword, changeForm } from "../store/auth";
import { useDispatch } from "react-redux";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { SvgIcon } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../hooks";
import { changePasswordVisibility } from "../store/auth";

export const SignUpFormCompenent = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(startCreateUserWithEmailAndPassword(data));
    dispatch(changeForm());
  };
  const { passwordVisibility } = useAuth();
  const onChangePasswordVisibility = () => {
    dispatch(changePasswordVisibility());
  };
  return (
    <form
      role="form text-left"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="mb-4">
        <input
          type="email"
          {...register(
            "email",
            { required: "Email address is required" },
            {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }
          )}
          className="placeholder:text-gray-700 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-base space-x-1 pt-2 px-2 text-purple-100  flex w-full">
            <ReportProblemIcon fontSize="small" />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          {...register("displayName", {
            required: "Username is required",
          })}
          className="placeholder:text-gray-700 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
          placeholder="Username"
        />
        {errors.displayName && (
          <p className="text-base space-x-1 pt-2 px-2 text-purple-100  flex w-full">
            <ReportProblemIcon fontSize="small" />
            <span>{errors.displayName.message}</span>
          </p>
        )}
      </div>
      <div className="mb-4">
        <div className="relative flex">
          <input
            type={passwordVisibility ? "text" : "password"}
            className="placeholder:text-gray-700 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
            placeholder="Passoword"
            {...register("password", { required: "Password is required!" })}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            <SvgIcon
              fontSize="small"
              onClick={onChangePasswordVisibility}
              className="text-gray-600  cursor-pointer"
              component={
                passwordVisibility ? VisibilityIcon : VisibilityOffIcon
              }
            />
          </div>
        </div>
        {errors.password && (
          <p className="text-base space-x-1 pt-2 px-2 text-purple-100  flex w-full ">
            <ReportProblemIcon fontSize="small" />
            <span>{errors.password.message}</span>
          </p>
        )}
      </div>
      <div className="mb-4">
        <div className="relative flex">
          <input
            type={passwordVisibility ? "text" : "password"}
            {...register("passwordConfirmation", {
              required: "Please confirm password!",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
            className="placeholder:text-gray-700  text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-sm  bg-gray-50 bg-clip-padding py-2.5 px-3  font-normal text-slate-600  transition-all focus:border-slate-300 focus:outline-none focus:transition-shadow"
            placeholder="Confirm Your Passoword"
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            <SvgIcon
              fontSize="small"
              onClick={onChangePasswordVisibility}
              className="text-gray-600  cursor-pointer"
              component={
                passwordVisibility ? VisibilityIcon : VisibilityOffIcon
              }
            />
          </div>
        </div>
        {errors.passwordConfirmation && (
          <p className="text-base space-x-1 pt-2 px-2 text-purple-100  flex w-full">
            <ReportProblemIcon fontSize="small" />
            <span>{errors.passwordConfirmation.message}</span>
          </p>
        )}
      </div>
      <div className="mb-4">
        <button
          disabled={!isValid}
          className="bg-gradient-to-l text-white font-semibold rounded-sm from-violet-700 via-violet-600 to-indigo-500 bg-indigo-500 w-full h-fit p-2 px-6 disabled:opacity-50"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
