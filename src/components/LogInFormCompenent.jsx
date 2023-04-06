import React from "react";

export const LogInFormCompenent = () => {
  return (
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
            <button>{/* <mat-icon>visibility_off</mat-icon> */}</button>
            <button>{/* <mat-icon>visibility</mat-icon> */}</button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <button className="bg-gradient-to-l text-white font-semibold rounded-sm from-violet-700 via-violet-600 to-indigo-500 bg-indigo-500 w-full h-fit p-2 px-6">
          Log in
        </button>
      </div>
    </form>
  );
};
