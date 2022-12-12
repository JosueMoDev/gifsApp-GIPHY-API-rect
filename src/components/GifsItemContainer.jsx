import { NoSearchRosultFound } from "./NoSearchRosultFound";
import { AddToFavorite, CopyToClipBoardButton } from "./";
import { useAllFavorites, useGetItemById, useGetResposeBySearchTerm } from '../hooks';
import { useNavigate } from "react-router-dom";

export const GifsItemContainer = () => {
    const { searchTerm } = useGetResposeBySearchTerm();
    const { gifsProccessed } = useAllFavorites();
    const { startShowingitem } = useGetItemById();
    const navigate = useNavigate();

    return (
        <>
            {(gifsProccessed.length > 0 ) ? 
                    <div className="bg-trasparent  capitalize ">
                    <div className="mx-auto max-w-2xl sm:py-15 sm:px-5 lg:max-w-7xl lg:px-5">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                            {gifsProccessed.map( gif => (
                                <div key={gif.id}>            
                                    <div className="group relative hover:opacity-80  cursor-pointer">
                                        <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80">
                                            <img
                                                onClick={() => {
                                                    startShowingitem({ id:gif.id, name: gif.title, user:gif.user })
                                                    navigate(`/gifs/${gif.slug}`);
                                                }}
                                            src={gif.url}
                                            alt={gif.title}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className='absolute top-0 right-2  flex'>
                                            <CopyToClipBoardButton itemData={{ item:gif, size: 1}}/>
                                            <AddToFavorite itemData={{ item:gif, size:1.1 }}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
                : <NoSearchRosultFound searchTerm={searchTerm} />
                        
            }
        </>
  )
}