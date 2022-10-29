import React, { Fragment } from 'react'
import { useItemList } from "../hooks";
import { NoSearchRosultFound } from "./NoSearchRosultFound";

export const GifsItemList = ({searchTerm }) => {
    const { gifsList } = useItemList(searchTerm);
  return (
      
    <Fragment>
         
        {gifsList.length>0 ? (
            <div className="bg-trasparent  capitalize ">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-50 flex items-end ">
                            {searchTerm}
                            <p className="ml-2 mb-1 text-sm font-semibold
                             text-gray-50">
                                { gifsList.length} Gifs
                            </p>
                        </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                    {gifsList.map(({ id, title, url }) => (
                        <div key={id} className="group relative">
                        <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
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
          ) : gifsList.length===0 && searchTerm.length>0 ? <NoSearchRosultFound searchTerm={searchTerm} /> : null
        }
    </Fragment>
  )
}
