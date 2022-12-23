
import { useGetResposeBySearchTerm } from "../hooks";
import { GifsItemContainer, StickersItemContainer, TagRelatedComponent } from "../components";

export const SearchPage = () => {
    const { isSearchingByGifs } = useGetResposeBySearchTerm();    
    return (
        <>
            <TagRelatedComponent />  
            {
                (isSearchingByGifs)
                ? <GifsItemContainer />
                :<StickersItemContainer />
            }
        </>
  )
}
