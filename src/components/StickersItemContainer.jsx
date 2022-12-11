import { NoSearchRosultFound } from "./NoSearchRosultFound";
import { AddToFavorite } from './';
import { useAllFavorites, useGetItemById, useGetResposeBySearchTerm } from "../hooks";
import { useNavigate } from "react-router-dom";


export const StickersItemContainer = () => {
    const { searchTerm } = useGetResposeBySearchTerm();
    const { stickersProccessed } = useAllFavorites();
    const { startShowingitem } = useGetItemById();
    const navigate = useNavigate();
    
    
    return (
        <>
        {(stickersProccessed.length>0)
                ?
                    <div className="bg-trasparent  capitalize ">
                        <div className="mx-auto max-w-2xl sm:py-15 sm:px-5 lg:max-w-7xl lg:px-5">
                        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                            {stickersProccessed.map( sticker => (
                            <div key={sticker.id} className="group relative">
                                <div className="min-h-full  w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-full">
                                    <img
                                    onClick={() => { 
                                        startShowingitem({ id:sticker.id, name: sticker.title }) 
                                        navigate(`/stickers/${sticker.slug}`)
                                    }}        
                                    src={sticker.url}
                                    alt={sticker.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                                    />
                                </div>
                        
                                <div className=''>
                                <AddToFavorite itemData={sticker}/>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>      
                :< NoSearchRosultFound searchTerm={searchTerm} />
        }
    </>
    )
}