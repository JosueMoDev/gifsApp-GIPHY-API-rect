import React, { Fragment } from "react";

export const NoSearchRosultFound = ({ searchTerm }) => {
  return (
    <Fragment>
      <div className="bg-trasparent rounded-md shadow-lg capitalize">
        <div className="mx-auto max-w-2xl py-16 items-center px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
          <p
            className="ml-1 text-3xl font-black
                text-white text-center"
          >
            🥲 Sorry we coul'dt found anything related to "{searchTerm}"
          </p>
        </div>
      </div>
    </Fragment>
  );
};
