import { ListItemContainer } from "/src/components";
import { useAllFavorites } from "/src/hooks";

export const FavoritesPage = () => {
  const { allFavorites } = useAllFavorites();

  return <ListItemContainer itemList={allFavorites} />;
};
