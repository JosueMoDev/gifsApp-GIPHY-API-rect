import { Fragment, React, useState } from 'react';
import { useItemList } from "../hooks";
import { GifsItemContainer, StickersItemContainer, MediaContainer, TagRelatedComponent,ButtonSwichGifsAndStickers } from ".";

export const GridComponent = ({ data }) => {
    const [searchTerm, onSearchTerm] = data
    
    const { gifsList, stickersList, tagsList } = useItemList(searchTerm);
    const { gifs, total_gifs } = gifsList
    const { stickers, total_stickers } = stickersList
    
   
    const [by, setBy] = useState('gifs');
    const onButtonClick = ({ target }) => setBy(target.value);    
    return (
        <Fragment>
            {searchTerm.length > 0
                ?   (<>  
                        <TagRelatedComponent data={ [total_gifs, total_stickers, by, searchTerm, tagsList, onSearchTerm]} />  
                        <ButtonSwichGifsAndStickers onButtonClick={onButtonClick} />
                        {by === 'stickers'
                            ?<StickersItemContainer stickersData={[stickers, searchTerm]} />
                            : <GifsItemContainer data={[gifs, searchTerm]} />
                        }
                    </>)
                :<MediaContainer />
            } 
        </Fragment>
  )
}
