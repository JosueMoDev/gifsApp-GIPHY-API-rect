import React, { Fragment } from "react";

export const NoSearchRosultFound = ({ searchTerm }) => {
  return (
    <Fragment>
      <>
        {searchTerm ? (
          <div className="bg-trasparent rounded-md shadow-lg capitalize">
            <div className="mx-auto w-full h-fit items-center">
              <p
                className="ml-1 text-md font-semibold
                  text-white text-center"
              >
                🥲 No GIFs found for "{searchTerm}" Try searching for Stickers
                instead?
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-trasparent rounded-md shadow-lg capitalize">
            <div className="mx-auto w-full h-fit items-center">
              <p
                className="ml-1 text-md font-semibold
                text-white text-center"
              >
                You don't have any{" "}
                <span className="text-rose-400">favorites</span> yet! Add to
                your favs by clicking the 🤍 around GIPHY.
              </p>
            </div>
          </div>
        )}
      </>
    </Fragment>
  );
};
