
import { AddToFavorite } from "../components";
import { useGetItemById, useGetResposeBySearchTerm } from "../hooks";


export const ShowItemCompontent = () => {
  const { startSearching } = useGetResposeBySearchTerm();
  const { item, itemTags } = useGetItemById();
  const onButtonClick = ({ target }) => startSearching(target.value);
  return (
    <>
        <div className="flex flex-cols-1 sm:flex-cols-1 lg:flex-cols-3 justify-around xl:gap-x-4 capitalize mt-5">
            
          <div></div>
          
            <div key={item.id} className="group relative">
                <div className="min-h-full  w-full overflow-hidden  bg-transparent  lg:aspect-none h-full">
                    <p className="text-gray-400 text-sm font-mono font-semibold">{item.title}</p>
                    <img       
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full pt-2"
                    />
                </div>
        
            </div>
                <div className='relative top-0 '>
                 <AddToFavorite itemData={item}/>  
                </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-transparent p-2  md:flex  mb-5 w-fit  truncate">
          {itemTags.map( ({name})  => (
            <div className="p-1  justify-items-center" key={name} >
                <button className=" px-4 w-min-fit h-9 text-sm rounded-full italic font-base
                    text-white hover:text-emerald-500  bg-gray-700 text-center"
                    value={name}
                    onClick={onButtonClick}
                    >
                    #{name}
                  </button>
              </div>            
            ))
          }
      </div>
      </div>
    </>
  )
}
