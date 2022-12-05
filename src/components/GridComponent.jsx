
import { useGetResposeBySearchTerm } from "../hooks";
import { GifsItemContainer, StickersItemContainer, MediaContainer, TagRelatedComponent,ButtonSwichGifsAndStickers } from ".";
import { useSelector } from 'react-redux';

export const GridComponent = () => {
    const { isSearchingByGifs, searchTerm } = useGetResposeBySearchTerm();    
    return (
        <>
            {(searchTerm)
                ? (<>  
                        <TagRelatedComponent />  
                        <ButtonSwichGifsAndStickers />
                        {   (isSearchingByGifs)
                            ? <GifsItemContainer />
                            :<StickersItemContainer />
                        }
                    </>)
                :<MediaContainer />
            } 
        </>
  )
}
