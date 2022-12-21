
import { useGetResposeBySearchTerm } from "../hooks";
import { GifsItemContainer, StickersItemContainer, TagRelatedComponent,ButtonSwichGifsAndStickers } from "../components";

export const SearchPage = () => {
    const { isSearchingByGifs, total_gifs, total_stickers } = useGetResposeBySearchTerm();    
    return (
        <>
            <TagRelatedComponent />  
            {
            (total_gifs || total_stickers > 0 )&&<ButtonSwichGifsAndStickers />
            }
            {
                (isSearchingByGifs)
                ? <GifsItemContainer />
                :<StickersItemContainer />
            }
        </>
  )
}
