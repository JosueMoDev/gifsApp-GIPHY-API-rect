import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import pink from '@mui/material/colors/pink';
import { useAllFavorites } from '../hooks';

export const AddToFavorite = ({ itemData }) => {

    const { startingToAddFavorite, startingToDeleteFavorite } = useAllFavorites()
    
    return (
        <>
            <div className='absolute top-0 right-2 m-1  hover:opacity-80 hover:animate-ping '>
                {(!itemData.isFavorite)
                    ?<IconButton onClick={() => startingToAddFavorite(itemData)}>
                        <FavoriteIcon sx={{ color:'white' }} />
                    </IconButton>
                    :
                    <IconButton onClick={() => startingToDeleteFavorite(itemData.id)}>
                        <FavoriteIcon sx={{ color: pink[400] }} />
                    </IconButton>
                } 
            </div> 
        </>
    )
}
