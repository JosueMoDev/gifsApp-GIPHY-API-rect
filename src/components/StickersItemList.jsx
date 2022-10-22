import React, { Fragment } from 'react'
import { useItemList } from "../hooks";
import { NoSearchRosultFound } from "./NoSearchRosultFound";

export const StickersItemList = ({ searchTerm }) => {
    const { stickersList } = useItemList(searchTerm);
    return (
      <Fragment>
          {stickersList.length>0 ? (
              <div className="bg-gray-100 rounded-md shadow-lg capitalize ">
                  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
                          <h2 className="text-4xl font-bold tracking-tight text-gray-700 flex items-end ">
                              {searchTerm}
                              <p className="ml-1 text-lg font-medium
                               text-gray-700">
                                  { gifsList.length } Stickers
                              </p>
                          </h2>
  
                      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 capitalize">
                      {stickersList.map(({ id, title, url }) => (
                          <div key={id} className="group relative">
                          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                              <img
                              src={url}
                              alt={title}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                          </div>
                          <div className="mt-4 flex justify-between">
                              <div>
                              <h3 className="text-sm text-gray-700">
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {title}
                              </h3>
                              </div>
                          </div>
                          </div>
                      ))}
                      </div>
                  </div>
                  </div>
              ): stickersList.length===0 && searchTerm.length>0 ? <NoSearchRosultFound searchTerm={searchTerm} /> : null
          }
      </Fragment>
    )
}

