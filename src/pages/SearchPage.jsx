
import { useGetResposeBySearchTerm } from "../hooks";
import { ListItemContainer,  TagRelatedComponent } from "../components";

export const SearchPage = () => {
    const { isSearchingByGifs, gifs, stickers } = useGetResposeBySearchTerm();    
    return (
        <>
            <TagRelatedComponent />  
            {
                (isSearchingByGifs)
                ? <ListItemContainer itemList={gifs} />
                : <ListItemContainer itemList={stickers} />
            }
        </>
  )
}
