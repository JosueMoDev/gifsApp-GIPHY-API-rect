import React, { Fragment } from 'react'

export const NoSearchRosultFound = ({searchTerm }) => {
  return (
    <Fragment>
        <div className="bg-trasparent rounded-md shadow-lg capitalize ">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-700 flex items-end ">
                    {searchTerm}
                    <p className="ml-1 text-3xl font-black justify-center
                    text-white">
                        Sorry we coul'dt found anything 🥲
                    </p>
                </h2>          
            </div>        
          </div>    
    </Fragment>
  )
}
