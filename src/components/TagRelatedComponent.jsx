import { Fragment, useState} from 'react'

export const TagRelatedComponent = ({ data }) => {
    const [total_gifs, total_stickers, by, searchTerm, tagsList, onSearchTerm] = data
    const onButtonClick = ({ target }) => onSearchTerm(target.value);
    
    return (
      <Fragment>
        <div className='flex items-center justify-between'>    
            <div className='px-5 py-5 items-start'>       
                <h2 className="text-4xl font-bold tracking-tight text-gray-50 flex items-end capitalize ">
                    {searchTerm}
                    <p className="ml-2 mb-1 text-sm font-semibold
                    text-gray-50">
                        { (by==='gifs')? (total_gifs+' GIFs'): (total_stickers+' Stickers') }
                    </p>
                </h2>
            </div>
            <div className="bg-transparent p-2 w-min mx-3 space-x-2 flex items-center truncate">
                {tagsList.map(({ name }) => (
                    <button key={name} className="min-w-fit min-h-fit px-3 h-7 text-sm rounded-full italic font-base
                        text-white hover:text-emerald-500  bg-gray-800 text-center"
                          value={name}
                        onClick={onButtonClick}
                      >
                        #{name}
                      </button>
                  ))
                }
            </div>
        </div>
    </Fragment>
  )
}
