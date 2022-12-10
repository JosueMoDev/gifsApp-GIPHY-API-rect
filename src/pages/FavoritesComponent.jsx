import { useNavigate } from 'react-router-dom';
import { AddToFavorite, NoSearchRosultFound } from '../components';
import { useAllFavorites, useGetItemById } from '../hooks'

export const FavoritesComponent = () => {
  const { allFavorites } = useAllFavorites();
  const { startShowingitem } = useGetItemById();
  const navigate = useNavigate();
  return (
    <>   
       {(allFavorites.length>0)
                ?   <>
                    <h1 className='text-3xl text-white text-center mt-5' > All Favorites Added</h1>
                    <div className="bg-trasparent  capitalize pt-10 ">
                        <div className="mx-auto max-w-2xl sm:py-15 sm:px-5 lg:max-w-7xl lg:px-5">
                        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                            {allFavorites.map( item => (
                              <div key={item.id} className="group relative">
                                <div className="min-h-full cursor-pointer w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-full ">
                                    <img
                                    onClick={() => {
                                      startShowingitem(item.id)
                                      navigate(`/${item.type}/${item.slug}`);
                                    }
                                    }
                                    src={item.url}
                                    alt={item.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                        
                                <div className=''>
                                  <AddToFavorite itemData={item}/>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>      
                  </>
                :< NoSearchRosultFound/>
        }
    </>
  )
}
