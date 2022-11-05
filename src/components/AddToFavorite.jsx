import { Fragment, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import gray from '@mui/material/colors/grey';
import { useAddToFavorites } from '../hooks';

export const AddToFavorite = ({ itemData }) => {
    // const [itemData, setItemData] = useState('')
    // const getItemData = (data) => setItemData(data)
    // console.log(itemData)
    return (
        <>
        {  <div className='absolute top-0 right-0 p-1 opacity-100 hover:animate-ping'>
                <IconButton onClick={() => useAddToFavorites(itemData)}>    
                    <FavoriteIcon sx={{ color: gray[50] }} />
                </IconButton>        
            </div> 
            // <FavoriteIcon sx={{ color: pink[100] }}/>      
        }
        </>
    )
}
