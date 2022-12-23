
import { AddToFavorite, CopyToClipBoardButton } from "../../components";
import { useGetItemById } from '../../hooks';
import { useNavigate } from "react-router-dom";
import {  ImageList, ImageListItem } from "@mui/material";


export const GifsRelated = () => {
  
    const { itemGifsRelated, startShowingitem } = useGetItemById();
    const navigate = useNavigate();

    return (
        <>
            {(itemGifsRelated.length > 0) && 
                <ImageList variant="masonry" gap={8}
                sx={{ columnCount:{sm: '2 !important', md: '3 !important', lg: '4 !important',}}}
                >
                    {itemGifsRelated.map(gif => (
                        <ImageListItem key={gif.id}>
                            <div>
                                <img
                                    src={`${gif.url}?w=248&fit=crop&auto=format`}
                                    alt={gif.title}
                                    loading="lazy"
                                    onClick={() => {               
                                        startShowingitem({ id:gif.id, name: gif.title, user:gif.user })
                                        navigate(`${gif.slug}`);
                                    }}
                                    style={{
                                        cursor: 'pointer',
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                        display: 'block',
                                        height: '100%',
                                        width:'100%'
                                        
                                    }}
                                />
                                <div className='absolute top-0 right-0 sm:right-2 sm:p-1 flex'>
                                    <CopyToClipBoardButton itemData={ gif }/>
                                    <AddToFavorite itemData={{ item: gif, size: 1.1}}/>
                                </div>
                            </div>
                        </ImageListItem>
                    ))}
                </ImageList>
            }
        </>
  )
}

