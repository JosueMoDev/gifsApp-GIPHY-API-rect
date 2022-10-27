import { Fragment } from 'react'
import { useGetTrendingResponse } from "../../hooks";

export const TrindingGifs = () => {
    const { trending } = useGetTrendingResponse(); 
  return (
    <Fragment>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 capitalize">
            {
                trending.map(({ id, title, url}) => (
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
                ))
            }
        </div>   
    </Fragment>
  )
}