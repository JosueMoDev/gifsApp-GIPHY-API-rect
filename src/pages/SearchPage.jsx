
import { useGetResposeBySearchTerm } from "../hooks";
import { ListItemContainer } from "../components";
import { TagsRelatedComponent } from "./components";

export const SearchPage = () => {
    const { isSearchingByGifs, gifs, stickers } = useGetResposeBySearchTerm();    
    return (
        <>
            <TagsRelatedComponent />  
            {
                (isSearchingByGifs)
                ? <ListItemContainer itemList={gifs} />
                : <ListItemContainer itemList={stickers} />
            }
        </>
  )
}
