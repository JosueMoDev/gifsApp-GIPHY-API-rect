import React, { Fragment } from 'react'
import { NoSearchRosultFound } from "./NoSearchRosultFound";

export const GifsItemList = ({ data }) => {
    const [gifs, searchTerm] = data
  return (
        <Fragment>
            {(!gifs)
                ? null
                : gifs.length > 0 ? (  
                    <div className="bg-trasparent  capitalize ">
                        <div className="mx-auto max-w-2xl sm:py-15 sm:px-5 lg:max-w-7xl lg:px-5">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                            {gifs.map(({ id, title, url }) => (
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
                    ) : gifs.length===0 && searchTerm.length>0 ? <NoSearchRosultFound searchTerm={searchTerm} /> : null
            }
        </Fragment>
  )
}