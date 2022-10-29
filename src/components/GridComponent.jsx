import { Fragment, React, useState } from 'react';
import { GifsItemList, StickersItemList, MediaContainer } from ".";

export const GridComponent= ({ searchTerm }) => {
    const [by, setBy] = useState('gifs');
    const onButtonClick = ({ target }) => setBy(target.value);
    return (
        <Fragment>
        {searchTerm.length>0 ? (
         <>       
         <div className="flex bg-transparent p-2 w-min  space-x-0">
            <button className="min-w-28 w-28 h-10 text-500 rounded-full p-2 font-semibold
             text-gray-50  bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700
             focus:bg-indigo-500 focus:text-white
             

             "
            value={'gifs'}
            onClick={onButtonClick}
            >
            Gifs                
            </button>
                        
            <button className="min-w-28 w-28 h-10 text-500 rounded-full  p-2 font-semibold
             text-gray-500  bg-transparent 
             active:text-white active:bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700
           
             "
            value={'stickers'}
            onClick={onButtonClick}
            >
            Stickers
            </button>
            
          
        </div>
        { by==='stickers'? <StickersItemList searchTerm={searchTerm}/> : <GifsItemList searchTerm={searchTerm}/> }
       </>): <MediaContainer />
     
        } 
        </Fragment>
        
  )
}
