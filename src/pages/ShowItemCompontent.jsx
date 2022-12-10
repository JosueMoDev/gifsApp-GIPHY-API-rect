import { AddToFavorite } from "../components";
import { useGetItemById } from "../hooks";
export const ShowItemCompontent = () => {
  const { item } = useGetItemById();
  return (
    <>
        <div className="flex flex-cols-1 sm:flex-cols-1 lg:flex-cols-3 justify-around xl:gap-x-4 capitalize mt-5">
            <div>
              <h1 className="text-white">hola</h1>
            </div>
            <div key={item.id} className="group relative">
                <h3 className="text-white text-xl font-mono font-semibold">{item.title}</h3>
                <div className="min-h-full  w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-full">
                    <img       
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                    />
                </div>
        
            </div>
                <div className='relative top-0'>
                <AddToFavorite itemData={item}/>
                </div>
        </div>    
    </>
  )
}
