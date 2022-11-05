import { AddToFavorite } from '.';
export const GifsItemList = ({ gifs }) => {
 
  return (
    <>
        <div className="bg-trasparent  capitalize ">
            <div className="mx-auto max-w-2xl sm:py-15 sm:px-5 lg:max-w-7xl lg:px-5">
                <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 capitalize">
                    {gifs.map(({ id, title, url, type }) => (
                        <div key={id}>            
                            <div className="group relative hover:opacity-80  cursor-pointer">
                                <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80">
                                    <img
                                    src={url}
                                    alt={title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className=''>
                                    <AddToFavorite itemData={{id, url, type}}/>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    </>
  )
}
