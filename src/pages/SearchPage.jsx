import { useGetResposeBySearchTerm } from "/src/hooks";
import { ListItemContainer } from "/src/components";
import { TagsRelatedComponent } from "/src/pages/components";

export const SearchPage = () => {
  const { isSearchingByGifs, gifs, stickers } = useGetResposeBySearchTerm();
  return (
    <>
      <TagsRelatedComponent />
      {isSearchingByGifs ? (
        <ListItemContainer itemList={gifs} />
      ) : (
        <ListItemContainer itemList={stickers} />
      )}
    </>
  );
};
