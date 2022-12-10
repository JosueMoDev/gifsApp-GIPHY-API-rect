import { IconButton } from '@mui/material';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import pink from '@mui/material/colors/pink';
import { useAllFavorites, useSetUi } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const AddToFavorite = ({ itemData }) => {

    const { startingToAddFavorite, startingToDeleteFavorite } = useAllFavorites()
    const { startCopyLink, isLinkCopid } = useSetUi();
    return (
        <>  
            <div className='absolute top-0 right-2  flex'>
                <div>   
                <CopyToClipboard text={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                    onCopy={() => (!isLinkCopid)&&startCopyLink() }>
                    <IconButton>
                        <FontAwesomeIcon className="text-white" fontSize={'1rem'} icon={ faLink }/>
                    </IconButton>
                </CopyToClipboard>
                </div>
                <div className=' hover:opacity-80 hover:animate-ping '>
                    {(!itemData.isFavorite)
                        ?<IconButton onClick={() => startingToAddFavorite(itemData)}>
                            <FavoriteIcon sx={{ color:'white', fontSize:'1.1rem' }} />
                        </IconButton>
                        :
                        <IconButton onClick={() => startingToDeleteFavorite(itemData.id)}>
                            <FavoriteIcon  sx={{ color: pink[400], fontSize:'1.1rem'}} />
                        </IconButton>
                    } 
                </div> 
            </div>
        </>
    )
}
