
import { useGetResposeBySearchTerm } from "../hooks";
import { GifsItemContainer, StickersItemContainer, TagRelatedComponent,ButtonSwichGifsAndStickers } from "../components";

export const SearchComponent = () => {
    const { isSearchingByGifs } = useGetResposeBySearchTerm();    
    return (
        <>
            <TagRelatedComponent />  
            <ButtonSwichGifsAndStickers />
            {   (isSearchingByGifs)
                ? <GifsItemContainer />
                :<StickersItemContainer />
            }
        </>
  )
}
