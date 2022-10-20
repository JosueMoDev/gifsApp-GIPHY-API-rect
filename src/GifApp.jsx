import { Fragment, React, useState } from 'react'
import { MainInputSeach, GridItemList } from "./components";

export const GifApp = () => {
    const [ searchTerm, setSearchTerm] = useState([])
    const onSearchTerm = (newSearchTerm) => { 
  
        if (searchTerm.includes( newSearchTerm.toLowerCase())) return;
        setSearchTerm([newSearchTerm])
    }
  
  return (
    <Fragment>
      <h1 className='text-gray-700 font-mono text-5xl font-bold mb-12 '>giftApp</h1>
      
      <MainInputSeach onNewSearchTerm={onSearchTerm} />
      {/* TODO:created a sort by gifs and stickers in addition a pagination */}
      {/* <button
        className='
            mt-3 my-3 inline-flex w-full justify-center 
            rounded-md border border-gray-300
            bg-green-900 px-4 py-2 text-base font-medium 
            text-gray-50 shadow-sm hover:bg-green-700 
            focus:outline-none focus:ring-2 focus:ring-gray-700 
            focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
        '
        >
        Add Category
      </button> */}
      { 
        <GridItemList
          key={searchTerm}
          searchTerm={ searchTerm}
        />              
      }
    </Fragment>      
    
  )
}
