
import { ListItemContainer } from '../components';
import { useAllFavorites } from '../hooks'

export const FavoritesPage = () => {
    const { allFavorites } = useAllFavorites();

    
    return ( <ListItemContainer itemList={allFavorites}/>)
}
