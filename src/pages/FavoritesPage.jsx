import { ImageList, ImageListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AddToFavorite, CopyToClipBoardButton } from '../components';
import { useAllFavorites, useGetItemById } from '../hooks'

export const FavoritesPage = () => {
    const { allFavorites } = useAllFavorites();
    const { startShowingitem } = useGetItemById();
    const navigate = useNavigate();
    
    return (
        <>   
        {(allFavorites.length > 0) &&
            <ImageList variant="masonry" gap={16} sx={{ pt:8, width:'100%', columnCount:{xs: '2 !important',  md: '3 !important', lg: '4 !important'}}}>
                {allFavorites.map(favorite => (
                    <ImageListItem key={favorite.id}>
                        <div>
                            <img
                                src={`${favorite.url}?w=248&fit=crop&auto=format`}
                                alt={favorite.title}
                                loading="lazy"
                                onClick={() => {               
                                    startShowingitem({ id:favorite.id, name: favorite.title, user:favorite.user })
                                    navigate(`${favorite.slug}`);
                                }}
                                style={{
                                    cursor: 'pointer',
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    borderTopLeftRadius: 4,
                                    borderTopRightRadius: 4,
                                    display: 'block',
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    opacity: 0.8,
                                    backgroundImage:  'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111827 25%, #111827 75%, #000 75%, #000)',
                                    backgroundPosition: '0 0, 35px 35px',
                                    backgroundSize: '70px 70px'
                                    
                                }}
                            />
                            <div className='absolute top-0 right-2  flex'>
                                <CopyToClipBoardButton itemData={ favorite }/>
                                <AddToFavorite itemData={{ item: favorite, size: 1.1}}/>
                            </div>
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
            }
        </>
    )
}
