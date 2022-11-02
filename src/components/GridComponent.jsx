import { Fragment, React, useState } from 'react';
import { useItemList} from "../hooks";
import { GifsItemList, StickersItemList, MediaContainer, TagRelatedComponent } from ".";

export const GridComponent = ({ data }) => {
    const [searchTerm, onSearchTerm] = data
    
    const { gifsList, stickersList, tagsList } = useItemList(searchTerm);
    const { gifs, total_gifs } = gifsList
    const { stickers, total_stickers } = stickersList
    
   
    const [by, setBy] = useState('gifs');
    const onButtonClick = ({ target }) => setBy(target.value);    
    return (
        <Fragment>
        {searchTerm.length>0 ? (
         <>  
         <TagRelatedComponent data={ [total_gifs, total_stickers, by, searchTerm, tagsList, onSearchTerm]} />  
         <div className="flex bg-transparent p-2 w-min mx-3 space-x-0">
            <button className="min-w-28 w-24 h-8 text-sm rounded-full  font-semibold
             text-gray-50  bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700
             focus:bg-indigo-500 focus:text-white
             "
            value={'gifs'}
            onClick={onButtonClick}
            >
            GIFs                
            </button>
       
            <button className="min-w-28 w-24 h-8 text-sm rounded-full  font-semibold
             text-gray-500  bg-transparent 
             active:text-white active:bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700
             "
            value={'stickers'}
            onClick={onButtonClick}
            >
            Stickers
            </button>
        </div>
                    {by === 'stickers' ? <StickersItemList stickersData={[stickers, searchTerm]} /> : <GifsItemList data={ [gifs, searchTerm] } /> }
       </>): <MediaContainer />
        } 
        </Fragment>
  )
}
