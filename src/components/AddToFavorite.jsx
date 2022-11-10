import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import pink from '@mui/material/colors/pink';
import gray from '@mui/material/colors/grey';

import { useAddToFavorites } from '../hooks';

export const AddToFavorite = ({ itemData }) => {
    localStorage.setItem('allFavorites', ['d7pyVYiAVRsNFVn8aF', "YWUpVw86AtIbe"]);
    // FIXME: try to align to right favorite botton, problem is carousel button, hidden all data
    return (
        <>
            <div className='absolute top-0 left-12 m-1  hover:opacity-80 hover:animate-ping'>
                {(!itemData.isFavorite)
                    ?<IconButton onClick={() => useAddToFavorites(itemData)}>
                        <FavoriteIcon sx={{ color: gray[50] }} />
                    </IconButton>
                    :
                    <IconButton onClick={() => useAddToFavorites(itemData.id)}>
                        <FavoriteIcon sx={{ color: pink[400] }} />
                    </IconButton>
                } 
            </div> 
        </>
    )
}
